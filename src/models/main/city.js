'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('../helpers/basicInfo');
var Price = require('../helpers/price');
var Hotel = require('../helpers/hotel');
var Activity = require('../helpers/activity');
var Address = require('../helpers/address');

var CitySchema = new Schema({
  id: {
    type: Number,
    Required: 'Kindly enter the name of the task'
  },
  basicInfo: BasicInfo.schema,
  code: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  address: Address.schema,
  hotelList: [Hotel.schema],
  activityList: [Activity.schema] 
});

module.exports = mongoose.model('cities', CitySchema);