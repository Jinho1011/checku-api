var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/onload", function (req, res, next) {
  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/Main/onLoad.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${req.cookies.JSESSIONID}`,
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

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
