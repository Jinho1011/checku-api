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
      Cookie:
        "JSESSIONID=00045MMGq4Whx32pFTVTfIDeFYe:2LL3FQPNS4:17BGRNS49U; WMONID=gghluu6ziW3",
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
router.get("/now", async function (req, res, next) {});

// 계절 학기
router.get("/seasonal", async function (req, res, next) {});

module.exports = router;
