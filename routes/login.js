var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

router.get("/", function (req, res, next) {
  var data = qs.stringify({
    "@d1#SINGLE_ID": req.body.id,
    "@d1#PWD": req.body.pwd,
    "@d1#default.locale": "ko",
    "@d#": "@d1#",
    "@d1#": "dsParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/Login/login.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      var JSESSIONID = response.headers["set-cookie"][1];
      if (JSESSIONID == undefined) {
        res.json(response.data);
      } else {
        JSESSIONID = JSESSIONID.split("; Path")[0].split("JSESSIONID=")[1];

        res.cookie("JSESSIONID", JSESSIONID);
        res.json({ JSESSIONID: JSESSIONID });
      }
    })
    .catch(function (error) {
      res.json(error);
    });
});

module.exports = router;
