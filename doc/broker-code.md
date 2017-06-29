# Discovery Broker Code Explanation
The code is structured into two parts to follow clear separation of concerns. As of now the user interface is served from the same web server implementing the Backend For Frontend features. In the future it may be relevant to separate the two if the development team add more reusable RESTful verbs in the current server content. In that case the life cycle and scope diverge and so separation should be applied.

The **client** folder includes the Angular 2 user interface, the user interface is used for demonstration purpose. As micro service the more important part is on the server side.

## Server Code
This server code uses expressjs and its middleware mechanism to map URL to function. The code is under **server** folder. The `server.js` declares the components to use and starts a web server based on nodejs.

The interesting parts are explained in the snippet below:
```javascript
// As the server exposes REST api to be consumed by the UI we delegate to a separate api module
const api = require('./routes/api');

// Point static path to dist where angular 2 compiled js reside
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file as single page application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
```

When the URL starts with `/api/` the code delegates to the module api which defines sub routes.

The `/api/news` or `/api/weather` URLs are supported by the module `routes/api.js`.
```javascript
const discoveryNewsBroker = require('./features/wds-news');
const discoveryWeatherBroker = require('./features/wds-weather');
const router = express.Router();

router.use('/news', discoveryNewsBroker);
router.use('/weather', discoveryWeatherBroker);
```

As the broker is supporting two different collections in Watson Discovery there are two entry points defined.

The `routes/features/wds-weather.js` code uses the Watson cloud api for nodejs as illustrated below:

```javascript
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const discovery = new DiscoveryV1({
  username: config.weatherCollection.username,
  password: config.weatherCollection.password,
  version_date: config.weatherCollection.version_date,
  path: {
    environment_id: config.weatherCollection.environment_id,
    collection_id: config.weatherCollection.collection_id
  }
});

router.post('/query', function(req, res) {
  const params = queryBuilder.buildForWeather(req.body.query);
  discovery.query(params, function(err, response) {
    if (err) {
      console.error("Error "+err);

    } else {
    //  console.log("Discovery response "+JSON.stringify(response, null, 2));
      res.json(response.results);
    }
  });
});
```
The configuration is defined externally in the `server/routes/env.json` file

The query builder code is used to prepare the Watson Discovery query using filters,...

### REST APIs exposed
The broker code offers two entry points and mapping user interface:

| Description | API  | User interface|
| ----------- | ---- | -------------- |
|  Query news with a product and company name | /api/company/product | |
| Query a Weather collection with a natural language question  | /api/weather | |

---

## Client Code
The Angular 2 code is following the current implementation practices, with component, specific html sub content, and services.
So the first interesting part is the code under `client/app/wds` folder. The `discovery.service.ts` is the service responsible to make the call to the BFF server.

```javascript
searchWeather(query) {
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  let urlSearchParams = new URLSearchParams();
  urlSearchParams.append('query', query);
  let body = urlSearchParams.toString();

  return this.http.post('/api/weather/query', body, options)
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
```

The User Interface for the weather looks like:  
![](wds-ui-weather.png)

The supporting page is `WDSWeather.component.html`. It is divided into three columns, and the form in the middle has a submit button connected to the following function in `WDSWeather.component.ts`.

```javascript
weatherSearch(query:string){
    this.searchResults=[];
  this.discoveryService.searchWeather(this.query).subscribe(
    data => {
      this.searchResults=data;
    },
    error => {
      console.log(error);
      return "Error on discovery service";
    })
}
```
The call is delegate the the service presented in previous section, and injected in the constructor:

```javascript
export class WDSWeatherComponent {
   constructor (private discoveryService: DiscoveryService) {
   }
}
```

The last part of the screen use some accordion controls to present the results.
