var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var sockets = require('./routes/sockets.js');

require('./db/index.js')(initServer);

function initServer() {
  var app = express();

  app.use(session({
    secret: 'victoriousresistance',
    resave: true,
    saveUninitialized: false,
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());

  //router and sockets
  require('./routes/webRoutes.js')(app, express);
  var server = require('http').Server(app);
  sockets(server);

  var port = process.env.PORT || 3000;

  server.listen(port, function() {
    console.log('iDioma listening on port: ' + port);
  });
}

