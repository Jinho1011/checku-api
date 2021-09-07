var express = require("express");
var router = express.Router();
var axios = require("axios");

const openSusts = require("/common/openSust");

// 전체 과목 검색
router.post("/v1", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/CourApplySimul/findSbjtList.do",
    JSESSIONID,
    {
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

// 과목 번호 검색
router.post("/v1/:id", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/CourApplySimul/findSbjtList.do",
    JSESSIONID,
    {
      _AUTH_MENU_KEY: "1130529",
      "@d1#openSust": req.body.openSust ?? "",
      "@d1#ltYy": req.body.ltYy ?? "",
      "@d1#ltShtm": req.body.ltShtm ?? "",
      "@d1#argDeptFg": "1",
      "@d1#pobtDiv": req.body.pobtDiv ?? "",
      "@d1#argTmnoDay": "",
      "@d1#stdNo": req.body.stdNo ?? "",
      "@d1#sbjtId": req.params.id ?? "",
      "@d1#corsKorNm": "",
      "@d1#sprfNo": "",
      "@d1#arglangNm": "",
      "@d1#ltType": "",
      "@d1#langType": "1",
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

// 전체 과목 검색
router.post("/v2", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/CourTotalTimetableInq/find.do",
    JSESSIONID,
    {
      _AUTH_MENU_KEY: "1130420",
      "@d1#ltYy": req.body.ltYy ?? "",
      "@d1#ltShtm": req.body.ltShtm ?? "",
      "@d1#openSust": req.body.openSust ?? "",
      "@d1#pobtDiv": req.body.pobtDiv ?? "",
      "@d1#sbjtId": req.body.sbjtId ?? "",
      "@d1#corsKorNm": req.body.corsKorNm ?? "",
      "@d1#sprfNo": "",
      "@d1#argDeptFg": "1",
      "@d1#arglangNm": "",
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

// 현재 학기
router.post("/ltShtm", function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;

  var header = config(
    "https://kuis.konkuk.ac.kr/CourTotalTimetableInq/load.do",
    JSESSIONID,
    {
      _AUTH_MENU_KEY: 1130420,
    }
  );

  axios(header)
    .then(function (response) {
      res.json({ BASI_SHTM: response.data.DS_SCOMSCHEDULEINQ[0].BASI_SHTM });
    })
    .catch(function (error) {
      res.json(error);
    });
});

// 학과 검색
router.post("/openSust", function (req, res, next) {
  const KOR_NM = req.body.KOR_NM ?? "";
  const result = openSusts.filter((openSust) =>
    openSust.KOR_NM.includes(KOR_NM)
  );
  res.json(result);
});

module.exports = router;
