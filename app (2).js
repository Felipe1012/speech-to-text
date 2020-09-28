
const express = require('express');
const app= express();
const morgan = require('morgan');
const cors = require("cors");

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 //routes
app.use(require('./routes/router'))
app.use(cors());


app.listen(app.get('port'),() =>{
  console.log(`serverlistening on port ${app.get('port')}`);
})