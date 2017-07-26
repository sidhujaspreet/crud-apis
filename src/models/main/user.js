'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  role: {
    type: String,
    Required: 'Kindly enter the name of the task',
      default: 'user'
  }
});

module.exports = mongoose.model('users', UserSchema);