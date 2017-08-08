'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var PriceSchema = new Schema({
    totalActual: {
      type: Number
    },
    totalDiscounted: {
      type: Number
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