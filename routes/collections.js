var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');
var Collection = require('../models/Collection.js');

/* GET /collections listing. */
router.get('/', function(req, res, next) {
  Collection.find(function (err, collections) {
    if (err) return next(err);
    res.json(collections);
  });
});

/* POST /collections listing. */
router.post('/', function(req, res, next) {
  Collection.create(req.body, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

/* GET /collections/id */
router.get('/:id', function(req, res, next) {
  Collection.findById(req.params.id, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

/* PUT /collections/:id */
router.put('/:id', function(req, res, next) {
  Collection.findByIdAndUpdate(req.params.id, req.body, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

/* Delete /collections/:id */
router.put('/:id', function(req, res, next) {
  Collection.findByIdAndRemove(req.params.id, req.body, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});
module.exports = router;