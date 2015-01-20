var Express = require('express');
var app = Express();

app.use("/", function(req, res) {
  res.send("hello world");
});

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);