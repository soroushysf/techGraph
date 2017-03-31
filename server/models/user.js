/**
 * Created by soroush on 3/31/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
var crypto = require('crypto');

var jwt = require('jsonwebtoken');
var config = require('../config/database')
// set up a mongoose model
var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};
userSchema.methods.validPassword = function(password) {
    var password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.password === password;
};
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000),
    }, config.secret); // DO NOT KEEP YOUR SECRET IN THE CODE!
};


module.exports = mongoose.model('User', userSchema);