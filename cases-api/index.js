const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 9001;

const casesIndex = JSON.parse(fs.readFileSync("/var/www/pmi-community/cases/case_index.json", "utf8"));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/api/cases") {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
      total: casesIndex.total,
      industries: Object.keys(casesIndex.by_industry || {})
    }));
  } else if (req.url.startsWith("/api/cases/industry/")) {
    const industry = req.url.split("/").pop();
    const cases = casesIndex.by_industry?.[industry] || [];
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({industry, count: cases.length, cases}));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Cases API running on port ${port}`);
});
