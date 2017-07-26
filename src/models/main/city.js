'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('../helpers/basicInfo');
var Price = require('../helpers/price');
var Hotel = require('../helpers/hotel');
var Activity = require('../helpers/activity');

var CitySchema = new Schema({
  id: {
    type: Number,
    Required: 'Kindly enter the name of the task'
  },
  code: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('cities', CitySchema);