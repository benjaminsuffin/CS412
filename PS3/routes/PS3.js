const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){

        res.render("index.pug", {string: 'What\'s up?', title: 'Hello World', len: 9})
});

router.post('/', function(req, res, next){

    res.render("index.pug", {string: req.body.string, len: req.body.string.length})
});

module.exports = router;