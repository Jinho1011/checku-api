var express = require("express");
var axios = require("axios");
var router = express.Router();

// api page
router.get("/", function (req, res, next) {
  res.redirect(
    "https://web.postman.co/workspace/My-Workspace~3fc9d5ce-773a-4d37-8af7-f9e540d3314a/documentation/5717096-013ad044-d58f-4f6b-9f00-b68d24454759"
  );
});

// onload
router.get("/onload", function (req, res, next) {
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
