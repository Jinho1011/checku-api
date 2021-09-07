var qs = require("qs");

const config = (url, JSESSIONID, data) => {
  data["_tokenKey73"] = "852478";

  var header = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Referer: "https://kuis.konkuk.ac.kr/index.do",
      Cookie: `JSESSIONID=${JSESSIONID}`,
    },
    data: qs.stringify(data),
  };

  return header;
};

export default config;
