const config = require("../../config/key");
const DB_SECRET = config.DB_SECRET;
const mysql = require("mysql");

function fetchData() {
  let data;
  const connection = mysql.createConnection({
    host: "ppsoln-test.c94ybcgjqd5w.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: DB_SECRET,
    database: "test",
  });

  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT id, name FROM testTable",
      function (err, rows, field) {
        if (err) {
          throw err;
        }
        resolve(rows);
      }
    );
  });
  // connection.connect(function (err) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     connection.query(
  //       "SELECT id, name FROM testTable",
  //       function (err, rows, field) {
  //         console.log(rows);
  //       }
  //     );
  //   }
  // });
}

module.exports = { fetchData };
