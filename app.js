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

 //routes
app.use(require('./routes/router'))
app.use(cors());

var server = app.listen(app.get('port'), function() {console.log('Listening on port %d', server.address().port);});
  
