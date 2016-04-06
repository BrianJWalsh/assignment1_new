var express = require('express');
var router = express.Router();

router.get('/artworklist', function(req, res) {
    var db = req.db;
    var collection = db.get('artwork');
    collection.find({},{limit:100},function(e,docs){
        res.json(docs);
    });
});

router.get('/:id', function(req, res) {
	var db = req.db;
    var collection = db.get('artwork');
	collection.findById('oid', function(e,docs){
		res.json(docs);
	});
});

module.exports = router;
