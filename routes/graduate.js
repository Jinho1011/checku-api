var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

const getCorsYy = (JSESSIONID, strStdNo) => {
  var data = qs.stringify({
    _AUTH_MENU_KEY: "1170201",
    "@d1#stdNo": strStdNo,
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/GrdtStdSimul/findSearch.do",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response.data.DS_CORSYY[0].MIN_YY;
    })
    .catch(function (error) {
      return "";
    });
};

// 졸업 시뮬레이션
router.post("/", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;
  const corsYy = await getCorsYy(JSESSIONID, req.body.strStdNo);

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1170201",
    "@d1#stdNo": req.body.stdNo ?? "",
    "@d1#corsYy": corsYy ?? "",
    "@d#": "@d1#",
    "@d1#": "dmParam2",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/GrdtStdSimul/findSearch2.do",
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
