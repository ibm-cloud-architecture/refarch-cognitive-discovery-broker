# Discovery Broker Code Explanation

The client folder includes the angular 2 user interface, the user interface is used for demonstration purpose. As micro service the more important part is on the server side.

This server code use expressjs and its middleware mechanism to map URL to function. The `server.js` declare the component to use and start a web server based on nodejs.

The interesting parts are explained in the snippet below:
```
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

When the URL is based as /api/discovery the module in charge is routes/features/discovery.js. This code uses the watson cloud develop api for nodejs.

## REST APIs exposed
The broker code offers two entry points and mapping user interface:

| Description | API  | User interface|
| ----------- | ---- | -------------- |
|  Query news  | /api/company/production | |
| Query a Weather collection  | /api/weather | |

---
