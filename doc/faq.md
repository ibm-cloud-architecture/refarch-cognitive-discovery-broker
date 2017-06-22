* How to delete n documents?
 prepare a list of id for each document to delete and use api. To delete all documents without removing the collection itself,  use api to perform a search with empty query, to get 'count' document, get id of those documents and call delete. Use offset to get the next 'count' docs.

* If you get 'weird' errors when running angular-cli commands like the example below:
ldwmbpr:source lennert$ ng --version
/usr/local/lib/node_modules/angular-cli/node_modules/@ngtools/json-schema/src/schema-class-factory.js:56
    constructor(schema, value, ...fallbacks) {
Please update your NPM install to the latest version from here:
https://nodejs.org/dist/v8.1.2/node-v8.1.2.pkg

* If npm commands fail to run, make sure you have the following environment variable set:
```
export NODE_PATH=/usr/local/lib/node_modules/
```

* Make sure you have installed nodemon module for npm
```
npm install nodemon --save
```

* If you get this issue:
```
$ng serve
As a forewarning, we are moving the CLI npm package to "@angular/cli" with the next release,
which will only support Node 6.9 and greater. This package will be officially deprecated
shortly after.

To disable this warning use "ng set --global warnings.packageDeprecation=false".

You have to be inside an angular-cli project in order to use the serve command.
```
Please make sure you install the latest @angular/cli packages:
```
npm install @angular/cli@latest
```
You can add the '-g' flag to install it globally

* If you get unexpected node issues (missing modules, etc) try running
```
npm link e
npm update
```

* Remove conflicting angular installations using 'npm uninstall --save angular-cli' command. Add the '-g' flag to remove the global package.
