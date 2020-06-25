var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const config = require('../configs/api');

client.flushdb((err, success) => {
  if (err) { throw new Error(err)}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/current', async(req, res, next) => {

  const name = req.body.ip.toString();
  client.exists(name, async (err, match) => {  //looks for key
    if(err) { throw new Error(err) }
    if (match) { //key exists, grab value
      client.get(name, (err, response) => {
        console.table(response);
        res.send(JSON.stringify("IP " + name + ' cached '))
      })

    } else {
      let result = await fetch(config.url + name + '/json');
      let object = await result.json();
      client.set(name, object, (err, response) => { //name = key, object = value
        console.table(response);
        res.send(JSON.stringify("IP " + name + ' not cached '))

      })
    }
  })





  // let result = await fetch(config.url + name + '/json');
  // let object = await result.json();
  // res.render("ps4", {title: "IP Address Tracker", address: object.ip, city: object.city, region: object.region});
});

module.exports = router;
