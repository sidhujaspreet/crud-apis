'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var BasicInfoSchema = new Schema({
    name: {
      type: String,
      Required: 'Kindly enter the name of the task'
    },
    description: {
      type: String
    },
    thumbnail: {
      type: String
    }
});

module.exports = mongoose.model('basicInfo', BasicInfoSchema);