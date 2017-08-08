'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var BasicInfo = require('./basicInfo');
var Price = require('./price');

var RoomSchema = new Schema({
    id: {
      type: Number
    },
    type: {
      type: String
    },
    mealPlan: {
      type: Array
    },
    basicInfo: BasicInfo.schema,
    price: Price.schema,
    photoList: {
      type: Array
    },
    amenities: {
      type: Array
    }
});

module.exports = mongoose.model('room', RoomSchema);