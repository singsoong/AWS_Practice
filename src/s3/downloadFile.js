const fs = require("fs");
const AWS = require("aws-sdk");
const config = require("../../config/key");
const ID = config.ID;
const SECRET = config.SECRET;
const BUCKET_NAME = "testbucket00917";
const s3 = new AWS.S3({ accessKeyId: ID, secretAccessKey: SECRET });

const downloadFile = (fileName) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: "test2.txt", // 버켓에서 어떤 파일을 가져올 것인지
  };
  s3.getObject(params, function (err, data) {
    if (err) {
      throw err;
    }
    fs.writeFileSync(fileName, data.Body.toString());
  });
};

downloadFile("./test3.txt"); // parameter로 어떤 이름으로 local에 저장할 것인지
module.exports = { downloadFile };
