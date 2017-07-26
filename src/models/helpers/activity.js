'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ActivitySchema = new Schema({

});

module.exports = mongoose.model('activity', ActivitySchema);