import AWS from 'aws-sdk';

export const uploadFile = async (file: File): Promise<void> => {
  const S3_BUCKET = process.env.S3_BUCKET || 'simple-file-upload-bucket';
  const REGION = process.env.REGION || 'us-east-1';

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'DUMMY',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'DUMMY',
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params: AWS.S3.PutObjectRequest = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };

  const upload = s3.putObject(params)
    .on('httpUploadProgress', (evt) => {
      console.log('Uploading ' + parseInt((evt.loaded * 100) / evt.total) + '%');
    })
    .promise();

  try {
    await upload;
  } catch (err) {
    console.error(err);
  }
};
