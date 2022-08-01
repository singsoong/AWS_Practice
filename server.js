const express = require("express");
const app = express();
const port = 3000;

// const createBucket = require("./src/s3/createBucket");

app.listen(port, () => {
  console.log(`서버 실행중 http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
