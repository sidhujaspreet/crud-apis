'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = require('./main/user');
var TableNames = require('./main/tableNames');
var City = require('./main/city');
var Package = require('./main/package');

module.exports = {
    User: User,
    TableNames: TableNames,
    City: City,
    Package: Package
};

