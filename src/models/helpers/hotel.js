'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BasicInfo = require('./basicInfo');
var Price = require('./price');
var Room = require('./room');
var Address = require('./address');

var HotelSchema = new Schema({
	id: {
		type: Number,
		Required: 'Kindly enter the name of the task'
	},
	selection: {
		isEnabled: Boolean,
		isSelected: Boolean
	},
	basicInfo: BasicInfo.schema,
	price: Price.schema,
	roomList: [Room.schema],
	address: Address.schema,
	userRating: {
		value: Number,
		outOf: Number
	},
	starRating: {
		value: Number,
		outOf: Number
	}
});

module.exports = mongoose.model('hotel', HotelSchema);