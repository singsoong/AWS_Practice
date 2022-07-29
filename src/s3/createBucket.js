const AWS = require("aws-sdk");
const config = require("../../config/key");
const ID = config.ID;
const SECRET = config.SECRET;
const BUCKET_NAME = "testbucket009172";

const s3 = new AWS.S3({ accessKeyId: ID, secretAccessKey: SECRET });
const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: "ap-northeast-2",
  },
};

function createBucket() {
  s3.createBucket(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log("Bucket Created Successfully", data.Location);
    }
  });
}

module.exports = { createBucket };
