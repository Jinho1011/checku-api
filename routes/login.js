var express = require('express');
var router = express.Router();
var axios = require('axios');
var qs = require('qs');


router.get('/', function(req, res, next) {
  var data = qs.stringify({
    '@d1#SINGLE_ID': 'gino9940',
   '@d1#PWD': 'jinho1221!',
   '@d1#default.locale': 'ko',
   '@d#': '@d1#',
   '@d1#': 'dsParam',
   '@d1#tp': 'dm' 
   });

   var config = {
    method: 'post',
    url: 'https://kuis.konkuk.ac.kr/Login/login.do',
    headers: { 
      'Referer': 'https://kuis.konkuk.ac.kr/index.do', 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Cookie': 'WMONID=Z-bZzHEKgdL; JSESSIONID=0001G1H9VYsnDSraiB2wg7yXOjl:-J90TNO'
    },
    data : data
  };
   
   axios(config)
   .then(function (response) {
     var cookies = response.config.headers.Cookie
     var JSESSIONID = cookies.split('JSESSIONID=')[1];
     console.log(JSESSIONID)
     res.json(JSON.stringify(response.data))
   })
   .catch(function (error) {
     console.log(error);
   });

});

module.exports = router;
