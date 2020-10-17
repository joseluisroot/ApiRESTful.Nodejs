const express = require('express'),
app = express(),
bodyParser = require('body-parser');

port = process.env.PORT || 3003;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

console.log('API server started on: ' + port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route

