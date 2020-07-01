var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const redis = require('redis');
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);
const config = require('../configs/api');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async(req, res, next) => {
  const name = req.body.ip;
  client.exists(name, async (err, match) => {  //looks for key
    if(err) { throw new Error(err) }
    if (match) { //key exists, grab value
      client.get(name, (err, response) => {
        response = JSON.parse(response);
        res.send({ip: response['ip'], city: response['city'], region: response['region'], fromCache: "yes"})
      })

    } else {
      let result = await fetch(config.url + name + '/json');
      let object = await result.json();
      let jObj = (JSON.stringify(object));
      client.set(name, jObj, (err, response) => { //name = key, object = value
        res.send({ip: object.ip, city: object.city, region: object.region, fromCache: "no"})

      });
    }
});

});

module.exports = router;
