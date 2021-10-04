const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    emial: String,
    password: String,
    passwordC: String,
    agreeTerm: Boolean,
    access: Number,
});

const User = model('user', userSchema);

module.exports = User;