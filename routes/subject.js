var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

const openSusts = require("./openSust");

// 전체 과목 검색
router.get("/", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1130529",
    "@d1#openSust": req.body.openSust ?? "",
    "@d1#ltYy": req.body.ltYy ?? "",
    "@d1#ltShtm": req.body.ltShtm ?? "",
    "@d1#argDeptFg": "1",
    "@d1#pobtDiv": req.body.pobtDiv ?? "",
    "@d1#argTmnoDay": "",
    "@d1#stdNo": req.body.stdNo ?? "",
    "@d1#sbjtId": req.body.sbjtId ?? "",
    "@d1#corsKorNm": "",
    "@d1#sprfNo": "",
    "@d1#arglangNm": "",
    "@d1#ltType": "",
    "@d1#langType": "1",
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/CourApplySimul/findSbjtList.do",
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

// 과목 번호 검색
router.get("/sbjtId/:id", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var data = qs.stringify({
    _AUTH_MENU_KEY: "1130529",
    "@d1#openSust": req.body.openSust ?? "",
    "@d1#ltYy": req.body.ltYy ?? "",
    "@d1#ltShtm": req.body.ltShtm ?? "",
    "@d1#argDeptFg": "1",
    "@d1#pobtDiv": req.body.pobtDiv ?? "",
    "@d1#argTmnoDay": "",
    "@d1#stdNo": req.body.stdNo ?? "",
    "@d1#sbjtId": req.params.id,
    "@d1#corsKorNm": "",
    "@d1#sprfNo": "",
    "@d1#arglangNm": "",
    "@d1#ltType": "",
    "@d1#langType": "1",
    "@d#": "@d1#",
    "@d1#": "dmParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/CourApplySimul/findSbjtList.do",
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

// 학과 검색
router.get("/openSust", async function (req, res, next) {
  const KOR_NM = req.body.KOR_NM ?? "";
  const result = openSusts.filter((openSust) =>
    openSust.KOR_NM.includes(KOR_NM)
  );
  res.json(result);
});

module.exports = router;
