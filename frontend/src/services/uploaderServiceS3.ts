import AWS from 'aws-sdk';

export const uploadFile = async (file) => {
  const S3_BUCKET = process.env.S3_BUCKET || "simple-file-upload-bucket-543157373122";
  const REGION = process.env.REGION || "us-east-1";

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIAX45VTZDBNFOBTLA6",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "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",
  });
  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };

  var upload = s3
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
      );
    })
    .promise();

  await upload.then((err, data) => {
    console.log(err);
  });
};