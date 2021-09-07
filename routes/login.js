var express = require("express");
var router = express.Router();
var axios = require("axios");
var qs = require("qs");

var e = [
  "charAt",
  "430247zrjTri",
  "11198sNdhJz",
  "74747NQBzyS",
  "140065QWevAw",
  "4mMkIqj",
  "substr",
  "1BSuOgL",
  "260246TsquCB",
  "286144yBGfFr",
  "2717HucEGV",
];
function d(f, g) {
  return (
    (d = function (i, j) {
      i = i - 220;
      var h = e[i];
      return h;
    }),
    d(f, g)
  );
}
(function (h, i) {
  var j = d;
  while (!![]) {
    try {
      var f =
        -parseInt(j(226)) +
        parseInt(j(229)) * -parseInt(j(223)) +
        parseInt(j(221)) +
        -parseInt(j(227)) * parseInt(j(220)) +
        -parseInt(j(222)) +
        -parseInt(j(228)) +
        parseInt(j(225));
      if (f === i) {
        break;
      } else {
        h.push(h.shift());
      }
    } catch (g) {
      h.push(h.shift());
    }
  }
})(e, 167471),
  (CryUtil = {
    getTKey: function (o) {
      var g = d,
        m = "ex",
        l = "t",
        f = "ok",
        k = "AezTIcLupW",
        n = String(o),
        i = 10;
      (n = n[g(230)](n.length - 1)), (n = parseInt(n));
      var j = n % 5,
        h = "";
      if (j == 4) {
        h =
          k[g(224)](n) +
          k[g(224)]((n + 4) % i) +
          k[g(224)]((n + 3) % i) +
          k[g(224)]((n + 2) % i) +
          k.charAt((n + 1) % i);
      } else {
        if (j == 3) {
          h =
            k[g(224)](n) +
            k.charAt((n + 3) % i) +
            k.charAt((n + 2) % i) +
            k[g(224)]((n + 1) % i);
        } else {
          if (j == 2) {
            h = k[g(224)](n) + k.charAt((n + 2) % i) + k.charAt((n + 1) % i);
          } else {
            if (j == 1) {
              h = k[g(224)](n) + k.charAt((n + 1) % i);
            } else {
              h = k[g(224)](n);
            }
          }
        }
      }
      return "_" + m + "6" + l + f + h;
    },
  });

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
      console.err(error);
    });
};

const getJSESSIONID = () => {
  var config = {
    method: "get",
    url: "https://kuis.konkuk.ac.kr/index.do",
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

router.post("/", function (req, res, next) {
  var data = qs.stringify({
    "@d1#SINGLE_ID": req.body.id,
    "@d1#PWD": req.body.pwd,
    "@d1#default.locale": "ko",
    "@d#": "@d1#",
    "@d1#": "dsParam",
    "@d1#tp": "dm",
  });

  var config = {
    method: "post",
    url: "https://kuis.konkuk.ac.kr/Login/login.do",
    headers: {
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(async function (response) {
      let JSESSIONID = await getJSESSIONID();
      JSESSIONID = JSESSIONID.headers["set-cookie"][1];

      if (JSESSIONID == undefined) {
        res.json(response.data);
      } else {
        JSESSIONID = JSESSIONID.split("; Path")[0].split("JSESSIONID=")[1];
        let value = await getCryptoKey(JSESSIONID);
        let key = CryUtil.getTKey(value);

        res.cookie("_ex_key", key);
        res.cookie("_ex_value", Buffer.from(value, "utf8").toString("base64"));
        res.cookie("JSESSIONID", JSESSIONID);

        res.json({ JSESSIONID: JSESSIONID });
      }
    })
    .catch(function (error) {
      res.json(error);
    });
});

module.exports = router;
