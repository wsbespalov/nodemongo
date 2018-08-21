var express = require('express');
var router = express.Router();
var DatabaseStats = require('../models/databasestats.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  DatabaseStats.find({}).exec()
  .then(function (dataFromModel) {
    console.log(dataFromModel);
    res.render('index', {
      title: 'mongoDB Stats example',
      json: dataFromModel,
    });
  })
  .then(undefined, function (err) {

  });
});

/* PUT home page. */
router.post('/create', function (req, res, next) {
  var st = new DatabaseStats({
    number: req.body.number,
    name: req.body.name,
    totalElements: req.body.totalElements,
    newElements: req.body.newElements,
    modifiedElements: req.body.modifiedElements,
  });
  st.save(function (err) {
    if (err) throw err;
    console.log('Stats ' + req.body.name + ' created.');
  });

  res.render('index', {
    title: 'mongoDB Stats example',
  });
});

module.exports = router;
