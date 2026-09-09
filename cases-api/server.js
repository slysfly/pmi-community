const http = require("http");
const fs = require("fs");

const casesIndex = JSON.parse(fs.readFileSync("/var/www/pmi-community/cases/case_index.json", "utf8"));

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  
  if (req.url === "/api/cases") {
    res.end(JSON.stringify({
      total: casesIndex.total,
      industries: Object.keys(casesIndex.by_industry || {})
    }));
  } else if (req.url.startsWith("/api/cases/industry/")) {
    const industry = decodeURIComponent(req.url.split("/").pop());
    const cases = casesIndex.by_industry?.[industry] || [];
    res.end(JSON.stringify({industry, count: cases.length, cases}));
  } else if (req.url === "/api/stats") {
    res.end(JSON.stringify({
      cases: casesIndex.total,
      industries: Object.keys(casesIndex.by_industry || {}).length
    }));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(9001, () => {
  console.log("Cases API running on port 9001");
});
