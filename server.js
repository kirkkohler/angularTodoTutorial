// Node configuration

// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb

// configuration =================

// connect to mongoDB database on modulus.io
// mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');
// connect to local mongoDB
mongoose.connect('mongodb://127.0.0.1/test');

app.configure(function() {
	app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.bodyParser()); // pull information from html in POST
	app.use(express.methodOverride()); // simulate DELETE and PUT
});

// define mongo (via mongoose) model ==========================================
// MongoDB will automatically generate an _id for each todo that we create also.
var Todo = mongoose.model('Todo', {
	text: String
});

// routes ======================================================================
// api ---------------------------------------------------------------------
// Internally call mongoose actions to find, create and remove objects

// get all todos
app.get('/api/todos', function(req, res) {

	// use mongoose to get all todos in the database
	Todo.find(function(err, todos) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err);

		res.json(todos); // return all todos in JSON format
	});
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

	// create a todo, information comes from AJAX request from Angular
	Todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err);
			res.json(todos);
		});
	});

});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);

		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err);
			res.json(todos);
		});
	});
});

// application -------------------------------------------------------------

// load the single view file (angular will handle the page changes on the front-end)
app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("Todo App listening on port 8080");