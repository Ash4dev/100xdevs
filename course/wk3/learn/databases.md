# Objective
- Create a working local library in minimum time
- focus on stuff relevant for SDE-1: https://www.masaischool.com/blog/understanding-sde-levels-sde-1-vs-sde-2-vs-sde-3-differences/

# Database 
- Databases can store data for longer & insertion-deletion is also optimized
- Database Options: PostgreSQL, MySQL, Redis, SQLite, and MongoDB etc.
	- choose optimal: experience, learning curve, support
- Interaction approaches with database:
	1. database native query language: SQL
	2. object relational/document mapper(ORM/ODM): JS objects mapped to database (agnostic/specific) backend
		- https://stackoverflow.com/a/71104472/19817062
- OR/DM is slower as a layer of translation is involved, but allows to think in terms of JS objects
	- OR/DM results in lower costs for development and maintainence in most cases
	- Eg. Mongoose(MongoDB), Waterline(Redis,MySQL,MongoDB), GraphQL(graph query language)

# Design Guidelines
- think about data to store and relationships between different objects
- generate separate models for every object (a group of related information)
	- schema defines the structure of the document, default values, validators, etc.
	- model provides an interface to the database for creating, querying, updating, deleting records
- once models are generated, think about the relationship between them (use UML association diagram)

# Local library

## Different Models (not task of SDE-1)
1. Books: ISBN, title, description, author, genre, category
2. multiple copies of same book can exist
3. Authors: name, genre, catrgory, location
4. Genre: can start/end as time rolls on

UML diagram: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose/library_website_-_mongoose_express.png

## Database APIs are asynchronous
- CRUD operations are async, hence use promises or async/await syntax a lot
- async/await approach is more dominant as leads to more readable and asynchronous code
	- async functions: async ensures that the function returns a promise, and wraps non-promises in it. (https://javascript.info/async-await, https://www.freecodecamp.org/news/javascript-async-await/, https://www.freecodecamp.org/news/javascript-promise-object-explained/)
	- await only works inside async functions, it makes JS wait until the promise settles and returns it result.
		- await literally suspends the function execution until the promise settles, and then resumes it with the promise result. 
		- That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc
		- more elegant syntax of getting the promise result than promise.then


	

