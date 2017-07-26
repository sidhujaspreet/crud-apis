'use strict';
module.exports = function(app) {
  var authUser = require('../controllers/authController');
  var actionList = require('../controllers/bbController');
    
    var authMiDl = require('../middleware/authenticate');

  // Authenricate Routes
  app.route('/login')
    .get(authUser.login);
  
  app.route('/register')
    .post(authUser.register);

  // Action Routes
  app.route('/:collectionName')
    .get(authMiDl.validateToken, actionList.readAll)
    .post(authMiDl.validateToken, actionList.create);

  app.route('/:collectionName/:collectionId')
    .get(authMiDl.validateToken, actionList.read)
    .put(authMiDl.validateToken, actionList.update)
    .delete(authMiDl.validateToken, actionList.delete);
};

