var express = require('express');
var router = express.Router();
var users = require('./routes/users');

router.param("userid", function(req, res, next) {
  var id = req.params('userid');
  var user = new User(id);
  req.user = user;
  next();
})

router.route("/users")
    .get(function(){})
    .post(function(){})
    .delete(function(){})
    .put(function(){})
    .patch(function(){});

router.get("/users/:userid", function(req, res, next) {
  res.json(req.user)
});

router.get('/', function(req, res, next) {
  res.send("users");
});

module.exports = router

app.listen(8080);