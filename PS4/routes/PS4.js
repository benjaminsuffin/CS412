var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const config = require('../configs/api');

/* GET home page. */
router.get('/current', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/current', async(req, res, next) => {
  let result = await fetch(config.url + req.body.ip + '/json');
  let object = await result.json();
  res.render("ps4", {title: "IP Address Tracker", address: object.ip, city: object.city, region: object.region});
});

module.exports = router;
