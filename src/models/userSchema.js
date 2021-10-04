const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    passwordC: String,
    agreeTerms: String,
    access: Number,
});

const User = model('user', userSchema);

module.exports = User;