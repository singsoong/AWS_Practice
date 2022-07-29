const fs = require("fs");
const AWS = require("aws-sdk");
const config = require("../../config/key");
const ID = config.ID;
const SECRET = config.SECRET;
const BUCKET_NAME = "testbucket00917";
const s3 = new AWS.S3({ accessKeyId: ID, secretAccessKey: SECRET });

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: "test2.txt", // S3에 업로드 되었을 때 저장될 파일 이름
    Body: fileContent,
  };
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

uploadFile("./test.txt");

module.exports = { uploadFile };
