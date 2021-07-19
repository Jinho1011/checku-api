var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

const getCorsYy = (JSESSIONID) => {
  return "2020";
};

// 졸업 시뮬레이션
router.get("/", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;
  const corsYy = getCorsYy(JSESSIONID);

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1170201",
    "@d1#strStdNo": req.body.strStdNo ?? "",
    "@d1#corsYy": corsYy,
    "@d#": "@d1#",
    "@d1#": "dmParam2",
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
