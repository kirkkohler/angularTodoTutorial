# Angular Todo App
---

Practice building an Angular Todo app via the tutorial on http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular.  

This project will use the MEAN architecture stack.  

| Letter | Description |
| ------ | ---- |
| M | mongodb - http://www.mongodb.org/ |
| E | express - http://expressjs.com/ |
| A | angularjs - http://angularjs.org/ |
| N | nodejs - http://nodejs.org/ |

The following will be accomplished via the tutorial above.

* RESTful Node API using Express
* MongoDB interaction using mongoose
* Angular AJAX $http calls
* Single page application w/ no refreshes

## Boilerplate Projects to Setup environment
---
Since I followed the tutorial a lot of the code was generated by hand.  There are a few boilerplate projects which will help with the initial configuration e.g. http://mean.io/ or try searching for a yeoman generators http://yeoman.io/community-generators.html

# Run Application
---
Have node and npm installed.
From node command prompt and within project directory run the following

	node server.js

# Application Structure
---

## server.js
---
	This is the file where we will:
	
 		* Configure our application
 		* Connect to our database
 		* Create our Mongoose models
 		* Define routes for our RESTful API
 		* Define routes for our frontend Angular application
 		* Set the app to listen on a port so we can view it in our browser

### Server API
---
How a frontend application should request data from the API.

| HTTP | Verb |	URL | Description |
| ---- | ---- | ---- | ---- | 
| GET | /api/todos | Get all of the todos |
| POST | /api/todos | Create a single todo | 
| DELETE | /api/todos/:todo_id | Delete a single todo |

## Angular
---

### core.js
---
Sets up angular module & controller which will call server API when user interacts with our Angular View.

### index.html (view)
---
HTML to interact with Angular

* Assign Angular module and controller
* Initialize the page by getting all todos
* Loop over the todos
* Have a form to create todos
* Delete todos when they are checked