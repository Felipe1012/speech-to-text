const express = require('express');
const app= express();
const morgan = require('morgan');
const cors = require("cors");
const http = require('http');


app.set('port', process.env.PORT || 3000);
var path = require('path')
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();
 //routes
app.use(require('./routes/router'))
app.use(cors());


app.set('appName', 'stt');

var cfenv = require("cfenv");

if (cfenv.getAppEnv().isLocal == true)
   {http.createServer(app).listen(app.get('port'),
     function(req, res) {console.log(app.get('appName')+' is listening locally on port: ' + app.get('port'));});
  }
  else
  {
    var server = app.listen(app.get('port'), function() {console.log('Listening on port %d', server.address().port);});
  }
