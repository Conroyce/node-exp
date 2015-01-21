var express = require('express');
var usersFile = require('../users')
var router = express.Router();


// router.param("userid", function(req, res, next) {
//   var id = req.params('userid');
//   var user = new User(id);
//   req.user = user;
//   next();
// })

router.route("/")
  .get(function(req,res,next){
    res.render('userList', {usersFile: usersFile});
  })
  .post(function(){})
  .delete(function(){});

router.route("/:userid") 
  .get(function(req,res,next){
    var id = req.params.userid
    res.render('user', {usersFile: usersFile[id]});
  })
  .post(function(){})
  .delete(function(){});

router.route("/:curUser/:viewUser")
  .get(function(req,res,next) {
    var curId = req.params.curUser
    var viewId = req.params.viewUser
    if (usersFile[curId]) {
      res.render('user', {usersFile: usersFile[viewId]});
    }
  })

module.exports = router
