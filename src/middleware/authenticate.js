'use strict';

var jwt = require('jsonwebtoken');


exports.validateToken = function(req, res, next){
    next(); //comment this line to enable token verification and uncomment below code
    
    /*var token = req.body.token || req.headers['token'];
    if (token){
        next();
        jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
            if(err){
                res.status(500).send("Invalid Token");
                console.log('.... token not verified');
            } else {
                next();
                console.log('.... token verified');
            }
        })
    } else {
        res.send("Please send a token.");
    }*/

}
