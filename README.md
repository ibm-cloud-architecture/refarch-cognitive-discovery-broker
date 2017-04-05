# Watson Discovery Broker Service

This project implements a micro service deployable as a Cloud Foundry application on bluemix to facade Watson Discovery service as there is always needs to support data mapping between the raw json response from Watson and the user interface consumer of those data. Therefore this broker exposes REST api that user interface born on cloud or coaches within IBM BPM process can consume.

# Current Version
This version is under development. You can fork it for your own purpose and develop by reusing the code. If you want to contribute please submit a pull request on this respository.

# Pre requisites
To be able to run this Watson Discovery broker you need your own instance of a bluemix Watson Discovery Service. Once you have created this service rename the server/routes/env-templ.json to env.json and modify the userid, password, environment_id and collection_id to point to your own service.


# REST APIs exposed
/api/company/production


# Build
Be sure to run the npm installation to get the dependent javascript modules
```
npm install
```
Run `ng build` to build the client Angular 2 project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
If you want to work on the user interface only you can use the command
```
ng serve
```

# Test Locally

# Deploy to bluemix
We will not go over the detail on how to create a cloud foundry application in bluemix but you need to do the following steps
* create a nodejs SDK cloud foundry application, be sure to use a name not in conflict with existing application under the mybluemix.net domain
![alt text](doc/ibmx-cf-nodesdk.png "Bluemix Cloud Foundry App")
