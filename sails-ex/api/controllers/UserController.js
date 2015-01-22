/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var usersFile = require('./users');

module.exports = { 
  index: function(req, res) {
    return res.view({users: usersFile});
  },
  show: function(req, res) {
    var id = req.params.id
    return res.view({users: usersFile[id]});
  }
};

