var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/game')

var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    score: Number,
});
var User = mongoose.model('user', userSchema);

module.exports = {User:User}