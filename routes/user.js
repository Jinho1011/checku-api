var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

router.post("/load", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1122208",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/RegiRegisterMasterInq/load.do",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

router.post("/", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;
  const key = req.cookies._ex_key;
  console.log("🚀 ~ file: user.js ~ line 39 ~ key", key);
  const value = req.cookies._ex_value;
  console.log("🚀 ~ file: user.js ~ line 41 ~ value", value);

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1122208",
    "@d1#strStdNo": req.body.strStdNo,
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  console.log(data);

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/RegiRegisterMasterInq/find.do",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

module.exports = router;
