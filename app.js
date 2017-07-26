require('dotenv').config();

var express = require('express'),
  app = express(),
  port = process.env.PORT || 2000,
  db_conn = process.env.DB_CONN || 'mongodb://jsidhu:jas963@ds129402.mlab.com:29402/bookbindass',
  mongoose = require('mongoose'),
  Task = require('./src/models/bbModel'),
  bodyParser = require('body-parser');

  var jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;

function createServer() {
 	try {
   		//mongoose.connect('mongodb://localhost:27017/todo'); 
	    mongoose.connect(db_conn);
	    
	    var sm = require('./src/middleware/serverMiddleware');
	    
	    app.use(sm.customHeaders);
	    app.use(bodyParser.urlencoded({ extended: true }));
	    app.use(bodyParser.json());
	    
	    var routes = require('./src/routes/bbRoutes');
	    routes(app);

	    app.listen(port);

	    console.log('Book Bindass RESTful API server started on: ' + port);
	}
	catch(e){
	    console.log(e);
	}
};

exports.createServer = createServer;