'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var HotelSchema = new Schema({

});

module.exports = mongoose.model('hotel', HotelSchema);