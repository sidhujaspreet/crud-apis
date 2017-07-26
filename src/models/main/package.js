'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('../helpers/basicInfo');
var Price = require('../helpers/price');
var CityModel = require('./city');

var PackageSchema = new Schema({
  id: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  basic: BasicInfo.schema,
  duration: {
    days: {
      type: Number
    },
    nights: {
      type: Number
    },
    type: {
      type: String
    }
  },
  validity: {
    from: {
      type: Date
    },
    to: {
      type: Date
    }
  },
  price: Price.schema,
  cityList: [CityModel.schema],
  photoList: {
    type: Array
  }
});

module.exports = mongoose.model('packages', PackageSchema);