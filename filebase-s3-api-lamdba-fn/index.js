const AWS = require('aws-sdk');
const fs = require('fs');
const util = require('util');

exports.handler =  async function(event, context) {
    const s3 = new AWS.S3({
        endpoint: 'https://s3.filebase.com',
        signatureVersion: 'v4',
        region: 'us-east-1',
        accessKeyId: process.env.FILEBASE_ACCESS_KEY,
        secretAccessKey: process.env.FILEBASE_SECRET_KEY,
    });

    const data = fs.readFileSync('my-plaintext-file', 'utf8');
    console.log(data);

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'my-plaintext-file',
        ContentType: 'text/plain',
        Body: data,
    };

    await new Promise((resolve, reject) => {
        const request = s3.putObject(params);
        request.on('httpHeaders', (statusCode, headers) => {
            try {
                console.log(`CID: ${headers['x-amz-meta-cid']}`);
            } catch(e) {
                console.log(e);
            }

            resolve();
        });
        request.send();
    })

    // console.log('sending S3-request');
    // const request = s3.putObject(params);
    // const result = await request.send();
    // console.log(util.inspect(result, false, null, false));
}
