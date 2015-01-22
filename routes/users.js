var express = require('express');
var usersFile = require('../users')
var router = express.Router();


router.param("index", function(req, res, next) {
  var id = req.params.userid;
 
  next();
})

router.route("/")
  .get(function(req,res,next){
    res.render('userList', {usersFile: usersFile});
  })
  .post(function(){})
  .delete(function(){});

router.get("/json",function(req,res,next) {
    res.send(usersFile)
  });

router.route("/:userid") 
  .get(function(req,res,next){
    var id = req.params.userid
    res.render('user', {usersFile: usersFile[id]});
  })
  .post(function(){})
  .delete(function(){});



router.route("/:userid/json")
  .get(function(req, res, next) {
    var id = req.params.userid
    res.send(userFile[id]);
  });  

router.route("/:index/:userid")
  .get(function(req,res,next) {
    var curIdCheck = req.params.index % 2;
    var viewIdCheck = req.params.userid % 2;
    var curId = req.params.index;
    var viewId = req.params.userid;

    if (curIdCheck == viewIdCheck) {
      if (usersFile[curId] && curId < usersFile.length && viewId < usersFile.length) {
        res.render('user', {usersFile: usersFile[viewId]});
      }
      res.send("404: Page not Found",404)
    } 

  });

module.exports = router
