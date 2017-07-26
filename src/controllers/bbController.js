'use strict';

var mongoose = require('mongoose'),
    Collection;

function setDb(dbName){
    Collection = mongoose.model(dbName);
};
    

exports.readAll = function(req, res) {
  var pageNumber = req.query.page - 1;
  var perPage = 4;
  setDb(req.params.collectionName);
  switch (req.params.collectionName) {
      case 'packages': 
        {
          Collection.find({})
            .limit(perPage)
            //.skip(perPage*pageNumber)
            .sort( { id: 'asc' })
            .populate('cityList.city', 'name')
            .exec(function(err, data) {
              if (err)
                res.send(err);
              res.json(data);
            });
        }
        break;
      default:
        {
          console.log(".... not for packages - " + req.params.collectionName);
          Collection.find({}, function(err, data) {
            if (err)
              res.send(err);
            res.json(data);
          });
        }
      }
  
};


exports.create = function(req, res) {
    setDb(req.params.collectionName);
  var new_entry = new Collection(req.body);
  console.log(new_entry);
  new_entry.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read = function(req, res) {
    setDb(req.params.collectionName);
    switch (req.params.collectionName) {
      case 'packages': 
        {
          console.log(".... for packages");
          Collection.findById(req.params.collectionId).populate('cityList.city', 'name').exec(function(err, data) {
          if (err)
            res.send(err);
          res.json(data);
          });
        }
        break;
      default: 
        {
          console.log(".... not for packages");
          Collection.findById(req.params.collectionId, function(err, data) {
            if (err)
              res.send(err);
            res.json(data);
          });
        }
    }
};


exports.update = function(req, res) {
    setDb(req.params.collectionName);
    Collection.findOneAndUpdate({_id: req.params.collectionId}, req.body, {new: true}, function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
};


exports.delete = function(req, res) {
    setDb(req.params.collectionName);
    Collection.remove({
    _id: req.params.collectionId
    }, function(err, data) {
        if (err)
        res.send(err);
        res.json({ message: 'Entry successfully deleted' });
    });
};
