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


app.get('/favicon.ico', (req, res) => {
  // Use actual relative path to your .ico file here
  res.sendFile(path.resolve(__dirname, '../imagen.png'));
});
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
