const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./rds/connectRds");

// const createBucket = require("./src/s3/createBucket");

app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

app.get("/select", (req, res) => {
  db.fetchData()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

app.listen(port, () => {
  console.log(`서버 실행중 http://localhost:${port}`);
});
