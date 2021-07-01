var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

router.get("/onload", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/Main/onLoad.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/load", async function (req, res, next) {
  var data = "_AUTH_MENU_KEY=1122208&";
  const JSESSIONID = req.cookies.JSESSIONID;

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
      console.log(error);
    });
});

router.get("/", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  const strStdNo = req.body.strStdNo,
    strStdNm = req.body.strStdNm,
    strYy = req.body.strYy,
    strShtm = req.body.strShtm,
    strDeptCd = req.body.strDeptCd,
    strUserId = req.body.strUserId;

  var data = `_AUTH_MENU_KEY=1122208&%40d1%23strStdNo=${strStdNo}&%40d1%23strStdNm=${strStdNm}&%40d1%23strYy=${strYy}&%40d1%23strShtm=${strShtm}&%40d1%23strSust=&%40d1%23strDeptCd=${strDeptCd}&%40d1%23strUserId=${strUserId}&%40d1%23strDeptGrd=0&%40d1%23strMenuCd=1122208&%40d%23=%40d1%23&%40d1%23=dmParam&%40d1%23tp=dm&`;
  console.log("🚀 ~ file: user.js ~ line 62 ~ data", data);

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
      console.log(error);
    });
});

module.exports = router;
