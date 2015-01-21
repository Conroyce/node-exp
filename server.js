var Express = require('express');
var fs = require('fs');
var users = require('./routes/users');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = Express();

app.use(Express.static(__dirname+"/www"));
app.use(Express.static(__dirname+"/assets"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.engine('jade',require('jade').__express);
app.set("views", "./views")
app.set("view engine", "jade");


app.use("/users", users);

// app.get("/",function(req,res,next) {    // <---test section
//   res.render('index', {header: "Jade Rocks!"});
// });

// app.get("/users/:id",function(req,res, next) {
//   var userId = req.params.id;
//   res.send(userFile[userId])
// })

// app.post("/users", function(req, res, next) {
//   var uniq = true;
//   userFile.forEach(function(user) {
//     if (user._id == req.body._id) {
//       uniq == false;
//       console.log(user.index+" "+req.body.index); 
//     }
//   });
//   if (uniq) {
//     // userFile.push(req.body);
//   }
  
//   fs.writeFileSync("./users.json",JSON.stringify(userFile));

// });

app.get('*', function(req, res) {
  res.send('Error: 404',404)
});

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);