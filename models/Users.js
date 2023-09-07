const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, unique: true, trim: true,
        lowercase: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    password: { type: String, required: true },

})

const User = mongoose.model('User', UsersSchema);
module.exports = { User };