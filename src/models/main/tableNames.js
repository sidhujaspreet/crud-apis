'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var TableNamesSchema = new Schema({
  id: {
    type: Number,
    Required: 'Kindly enter the name of the task'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  value: {
    type: String,
    Required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('tableNames', TableNamesSchema);