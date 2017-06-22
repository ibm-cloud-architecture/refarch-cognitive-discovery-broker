* How to delete n documents?
 prepare a list of id for each document to delete and use api. To delete all documents without removing the collection itself,  use api to perform a search with empty query, to get 'count' document, get id of those documents and call delete. Use offset to get the next 'count' docs.

* If you get 'weird' errors when running angular-cli commands like the example below:
ldwmbpr:source lennert$ ng --version
/usr/local/lib/node_modules/angular-cli/node_modules/@ngtools/json-schema/src/schema-class-factory.js:56
    constructor(schema, value, ...fallbacks) {
Please update your NPM install to the latest version from here:
https://nodejs.org/dist/v8.1.2/node-v8.1.2.pkg
