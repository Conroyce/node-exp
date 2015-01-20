var Express = require('express');
var fs = require('fs');
var userFile = require('./users');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = Express();

app.use(Express.static(__dirname+"/www"));
app.use(Express.static(__dirname+"/js"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data




app.get("/users",function(req,res) {
  res.send(userFile);
})

app.get("/users/:id",function(req,res, next) {
  var userId = req.params.id;
  res.send(userFile[userId])
})

app.post("/users", function(req, res, next) {
  // userFile.push(userId);
  console.log(req.body);
  userFile.push(req.body)
  fs.writeFileSync("./users.json",JSON.stringify(userFile));
  // fs.appendFileSync("./users.json",user);
});

app.get('*', function(req, res) {
  res.send('Error: 404',404)
});

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);