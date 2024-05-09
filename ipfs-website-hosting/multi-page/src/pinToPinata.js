const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const {config} = require("dotenv");
config();
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT_KEY});

// TODO - error - not able to create read stream from folder
(async () => {
    const stream = fs.createReadStream('./src/multi-page-site');

    const res = await pinata.pinFileToIPFS(stream, {
        pinataMetadata: {
            name: 'Multi-Page Site',
        }
    });
    console.log(res);
})();
