const axios = require("axios");
const {config} = require("dotenv");
config();
const API_URL = 'https://api.filebase.io/v1/ipfs/pins';

(async () => {
    const result = await axios.post(API_URL, {
        "cid": process.env.CID,
        "name": "my-site",
        "meta": {
            "name": "my_site"
        }
    }, {
        headers: {
            Authorization: `Bearer ${process.env.BUCKET_API_KEY}`
        }
    });

    console.log(result.data);
})();