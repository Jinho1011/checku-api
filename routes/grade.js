var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

// 전체 성적
router.get("/all", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1122208",
    "@d1#strStdNo": req.body.strStdNo ?? "",
    "@d1#strMenuCd": "1122208",
    "@d#": "@d1#",
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
      res.json(response.data.DS_GRAD);
    })
    .catch(function (error) {
      res.json(error);
    });
});

router.get("/load", function (req, res, next) {
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
router.get("/now", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1140302",
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

router.get("/now/:id", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1140302",
    "@d1#ltYy": req.body.ltYy ?? "",
    "@d1#ltShtm": req.body.ltShtm ?? "",
    "@d1#sbjtId": req.params.id,
    "@d1#stdNo": req.body.stdNo ?? "",
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/GradNowShtmGradePop/find.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      "Content-Type": "application/x-www-form-urlencoded",
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
router.get("/seasonal", function (req, res, next) {});

module.exports = router;
