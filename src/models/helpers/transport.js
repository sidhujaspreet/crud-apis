'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('./basicInfo');
var Price = require('./price');
    
var TransportSchema = new Schema({
    id: {
      type: String
    },
    basicInfo: BasicInfo.schema,
    price: Price.schema,
    type: {
      type: String
    },
    vehicle: {
      type: String
    },
    pickup: {
      type: String
    },
    dropoff: {
      type: String
    }
});

module.exports = mongoose.model('transport', TransportSchema);