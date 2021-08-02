var express = require("express");
var path = require("path");
var axios = require("axios");
var router = express.Router();

const getCryptoKey = (JSESSIONID) => {
  var config = {
    method: "get",
    url: "https://kuis.konkuk.ac.kr/index.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
  };

  return axios(config)
    .then(function (response) {
      let string = response.data;
      string = string.split('"_mt":"')[1];
      string = string.split('"});cpr.core.')[0];

      return string;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// api page
router.get("/", function (req, res, next) {
  res.redirect("https://documenter.getpostman.com/view/5717096/TzmChtFj");
});

// onload
router.post("/onload", async function (req, res, next) {
  const JSESSIONID = req.cookies.JSESSIONID;
  const key = await getCryptoKey(JSESSIONID);

  res.cookie("crypto", Buffer.from(key, "utf8").toString("base64"));

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
      res.json(error);
    });
});

module.exports = router;
