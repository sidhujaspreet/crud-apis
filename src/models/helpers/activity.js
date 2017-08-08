'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('./basicInfo');
var Price = require('./price');
var Address = require('./address');

var ActivitySchema = new Schema({
	id: {
		type: Number
	},
	selection: {
		isEnable: Boolean,
		isSelected: Boolean,
		isAddOn: Boolean
	},
	category: {
		typ: Array
	},
	basicInfo: BasicInfo.schema,
	address: Address.schema,
	price: Price.schema,
	userRating: {
		type: String
	}
});

module.exports = mongoose.model('activity', ActivitySchema);