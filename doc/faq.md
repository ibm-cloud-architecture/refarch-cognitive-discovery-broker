* How to delete n documents?
 prepare a list of id for each document to delete and use api. To delete all documents without removing the collection itself,  use api to perform a search with empty query, to get 'count' document, get id of those documents and call delete. Use offset to get the next 'count' docs.
