var Express = require('express');
var userFile = require('./users');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = Express();

// app.use(Express.static(__dirname+"/www"));
// app.use(Express.static(__dirname+"/js"));



app.get("/", function(req, res){
    res.send("hello world");
});

app.get("/users",function(req,res) {
  res.send(userFile);
})

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);