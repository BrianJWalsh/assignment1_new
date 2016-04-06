var express = require('express');
var router = express.Router();

router.get('/artistlist', function(req, res) {
    var db = req.db;
    var collection = db.get('artist');
    collection.find({},{limit:100},function(e,docs){
        res.json(docs);
    });
});

router.get('/:id', function(req, res) {
	var db = req.db;
    var collection = db.get('artist');
	collection.findById('oid', function(e,docs){
		res.json(docs);
	});
});



module.exports = router;
