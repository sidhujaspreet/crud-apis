'use strict';

var jwt = require('jsonwebtoken');

var mongoose = require('mongoose'),
    Collection = mongoose.model('users'),
    secretKey = process.env.SECRET_KEY || 'jarvis';
    
exports.login = function(req, res) {
    var user = getCreds(req);
    console.log('... ' + user.username + user.password);
    Collection.findOne({username: user.username}, function(err, data) {
    if (err)
      res.send(err);
    if (data && (data.password == user.password)) {
        var claims = {
            sub: user.username,
            iss: 'https://mysite.com',
            permissions: user.role
        };
        var token = jwt.sign(claims, secretKey, {
            expiresIn: 4000
        });
        res.json({
            success: true,
            token: token
        });
    } else {
        res.json({
            success: false,
            Message: "Username or password is incorrect."
        });
    }
    
  });
};


exports.register = function(req, res) {
  var newUser = new Collection(req.body);
  newUser.save(function(err, data) {
    if (err)
      res.send(err);
      
    var token = jwt.sign(req.body, secretKey, {
        expiresIn: 4000
    });
    res.json({
        success: true,
        token: token
    });
      
  });
};


function getCreds(req){
    var auth = req.headers['authorization'];
    var tmp = auth.split(' ');
    var buf = new Buffer(tmp[1], 'base64');
    var plain_auth = buf.toString();
    var creds = plain_auth.split(':');
    return ({
        username : creds[0],
        password : creds[1]
    });
};

