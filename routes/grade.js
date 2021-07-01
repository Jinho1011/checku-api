var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

// 전체 성적
router.get("/", async function (req, res, next) {});

router.get("/load", async function (req, res, next) {
  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/GradNowShtmGradeInq/load.do",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://kuis.konkuk.ac.kr/index.do",
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

// 현재 학기
router.get("/now", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1140302",
    // "@d1#curDate": req.body.curDate ?? "",
    "@d1#basiYy": req.body.basiYy ?? "",
    "@d1#basiShtm": req.body.basiShtm ?? "",
    "@d1#stdNo": req.body.stdNo ?? "",
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/GradNowShtmGradeInq/find.do",
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

// 계절 학기
router.get("/seasonal", async function (req, res, next) {});

module.exports = router;
