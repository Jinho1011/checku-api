var express = require("express");
var path = require("path");
var axios = require("axios");
var router = express.Router();

// api page
router.get("/", function (req, res, next) {
  res.redirect("https://documenter.getpostman.com/view/5717096/TzmChtFj");
});

// onload
router.post("/onload", async function (req, res, next) {
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
      res.json(error);
    });
});

module.exports = router;
