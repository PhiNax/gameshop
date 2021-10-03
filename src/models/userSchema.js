const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    emial: String,
    password: String,
    access: Number,
    userImage: String
});

const User = model('user', userSchema);

module.exports = User;