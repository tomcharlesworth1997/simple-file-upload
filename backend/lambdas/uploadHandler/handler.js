const AWS = require('aws-sdk');

exports.handler = async (event) => {
  try {
    console.log('Event:', event);

    // Parse the body if it's base64 encoded
    let decodedBody;
    if (event.isBase64Encoded) {
      decodedBody = Buffer.from(event.body, 'base64').toString('utf-8');
    } else {
      decodedBody = event.body;
    }
    
    console.log('Decoded Body:', decodedBody);

    const body = JSON.parse(decodedBody);
    console.log('Parsed Body:', body);

    const file = body.file; // Assuming the field name is 'file' in the request

    // Process the uploaded file (you can save it to S3, perform processing, etc.)
    // In this example, let's just return a response with a success message
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
