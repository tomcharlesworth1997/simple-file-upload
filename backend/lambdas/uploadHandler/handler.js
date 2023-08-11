const AWS = require('aws-sdk');

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME; // Environment variable for S3 bucket name

exports.handler = async (event) => {
  try {
    console.log('Event:', event);

    const formData = event.body; // The entire form data
    
    // Initialize the S3 instance
    const s3 = new AWS.S3();

    const currentTimestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const s3Key = `uploads/${currentTimestamp}`;

    // Define S3 upload parameters
    const params = {
      Bucket: S3_BUCKET_NAME,
      Key: s3Key,
      Body: event.body,
    };

    // Upload the file data to S3
    await s3.upload(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File uploaded successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
