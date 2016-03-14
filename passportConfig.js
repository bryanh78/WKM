var DB = require('./model/mainmodel.js')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
        	console.log("alpha :", user)
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null,user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));
// console.log("app :", app)
// app.post('/signup', function(req, res){
//     bcrypt.genSalt(11, function(error, salt){
//         bcrypt.hash(req.body.password, salt, function(hashError, hash){
//             var newUser = new DB.User({
//                 username: req.body.username,
//                 password: hash,
//             });
//             newUser.save(function(saveErr, user){
//                 if ( saveErr ) { res.send({ err:saveErr }) }
//                 else {
//                     req.login(user, function(loginErr){
//                         if ( loginErr ) { res.send({ err:loginErr }) }
//                         else { res.send({success: 'success'}) }
//                     })
//                 }
//             })

//         })
//     })
// })

// app.post('/login', function(req, res, next){
//     passport.authenticate('local', function(err, user, info) {
//         if (err) { return next(err); }
//         if (!user) { return res.send({error : 'something went wrong :('}); }
//         req.logIn(user, function(err) {
//             if (err) { return next(err); }
//             return res.send({success:'success'});
//         });
//     })(req, res, next);
// })