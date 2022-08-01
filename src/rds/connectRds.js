const config = require("../../config/key");
const DB_SECRET = config.DB_SECRET;
const mysql = require("mysql");

function fetchData() {
  const data = "";
  const connection = mysql.createConnection({
    host: "ppsoln-test.c94ybcgjqd5w.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: DB_SECRET,
    database: "test",
  });

  connection.connect(function (err) {
    if (err) {
      throw err;
    } else {
      connection.query(
        "SELECT id, name FROM testTable",
        function (err, rows, field) {
          data = rows;
        }
      );
    }
  });
  return data;
}

module.exports = { fetchData };
