var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

router.get("/load", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;
  var data = "_AUTH_MENU_KEY=1122208";

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

router.get("/", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1122208",
    "@d1#strStdNo": req.body.strStdNo,
    // "@d1#strStdNm": req.body.strStdNm,
    // "@d1#strYy": req.body.strYy,
    // "@d1#strShtm": req.body.strShtm,
    // "@d1#strSust": " ",
    // "@d1#strDeptCd": req.body.strDeptCd,
    // "@d1#strUserId": req.body.strUserId,
    // "@d1#strDeptGrd": "0",
    "@d1#strMenuCd": "1122208",
    "@d#": "@d1#",
    // "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

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
