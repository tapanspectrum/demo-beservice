const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: String,
    mobile: String,
    password: Number,
    emailId:String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);