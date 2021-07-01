var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

// 전체 성적
router.get("/", async function (req, res, next) {});

// 현재 학기
router.get("/now", async function (req, res, next) {});

// 계절 학기
router.get("/seasonal", async function (req, res, next) {});

module.exports = router;
