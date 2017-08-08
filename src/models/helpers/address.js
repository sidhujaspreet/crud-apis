'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var AddressSchema = new Schema({
    address1: {
      type: String
    },
    address1: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    country: {
      type: String
    },
    zipCode: {
      type: Number
    },
    landmark: {
      type: String
    }
});

module.exports = mongoose.model('address', AddressSchema);