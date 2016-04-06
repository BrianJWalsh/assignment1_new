var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/artist', function(req, res, next) {
  res.render('artist', { title: 'Artist' });
});

router.get('/artwork', function(req, res, next) {
  res.render('artwork', { title: 'Artwork' });
});


module.exports = router;
