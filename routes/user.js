var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/load", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/RegiRegisterMasterInq/load.do",
    JSESSIONID,
    {
      _AUTH_MENU_KEY: "1122208",
    }
  );

  axios(header)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

router.post("/", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/RegiRegisterMasterInq/find.do",
    JSESSIONID,
    {
      _AUTH_MENU_KEY: "1122208",
      "@d1#strStdNo": req.body.strStdNo,
      "@d#": "@d1#",
      "@d1#": "dmParam",
      "@d1#tp": "dm",
    }
  );

  axios(header)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

module.exports = router;
