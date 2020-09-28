const express = require('express');
const app= express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);
var path = require('path')
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 //routes
app.use(require('./routes/router'))
//app.use(favicon(path.join(__dirname, 'public', '../imagen.png')))


app.listen(app.get('port'),() =>{
  console.log(`serverlistening on port ${app.get('port')}`);
})