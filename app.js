// importing modules
var express  = require('express');
var mongoose= require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var path = require('path');
var route = require('./routes/route');

// port no
const port = 3000;

// adding miiddleware- cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

// routes
app.use('/api', route);




// testing  server
app.get('/',(req, res)=>{

});
app.listen(port,()=>{
    console.log("server started at port:"+port);
});