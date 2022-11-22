const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab12');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {type:String, required:true},
  Email: { type: String, required: true },
  Age: { type: Number, required: true },
  Contact: {type: Number, required: true},
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;