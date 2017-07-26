'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var PriceSchema = new Schema({
    totalActual: {
      type: Number,
      Required: 'Kindly enter the name of the task'
    },
    totalDiscounted: {
      type: Number,
      Required: 'Kindly enter the name of the task'
    },
    adultActual: {
      type: Number
    },
    adultDiscounted: {
      type: Number
    },
    childActual: {
      type: Number
    },
    childDiscounted: {
      type: Number
    }
});

module.exports = mongoose.model('price', PriceSchema);