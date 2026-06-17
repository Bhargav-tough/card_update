const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/databasemodule');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});
const User = mongoose.model('User', userSchema);
module.exports = User;