var Express = require('express');
var app = Express();

app.use(Express.static(__dirname+"/www"));
app.use(Express.static(__dirname+"/js"));

// app.use("/", function(req, res) {
//   console.log(req.path);
//   Express.static(__dirname+"/www");
// });



var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);