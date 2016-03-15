var DB = require('../models/mainmodel.js');
var bcrypt = require('bcryptjs')
var passport = require('passport')

var signUp = function(req, res){
    bcrypt.genSalt(11, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new DB.User({
                username: req.body.username,
                password: hash,
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else {
                	console.log("stuff", user)
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })

        })
    })
}
var logIn = function(req, res, next){
	console.log("arrive at login")
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({error : 'something went wrong :('}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send({success:'success'});
        });
    })(req, res, next);
  
}

var score = function(req, res) {
    user.update({score: req.params.score}, req.body, function(err, updated) {
        
    }) 

}

module.exports = {signUp : signUp, logIn : logIn, score :score }