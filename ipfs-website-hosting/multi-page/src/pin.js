const {config} = require("dotenv");
config();

// TODO - load actual files from multi-page-site dir and send
const pinDirectoryToIPFS = async () => {
    try {
        const folder = "json";
        const json1 = { hello: "world" };
        const json2 = { hello: "world2" };
        const blob1 = new Blob([JSON.stringify(json1, null, 2)], {
            type: "application/json",
        });
        const blob2 = new Blob([JSON.stringify(json2, null, 2)], {
            type: "application/json",
        });

        const files = [
            new File([blob1], "hello.json", { type: "application/json" }),
            new File([blob2], "hello2.json", { type: "application/json" }),
        ];

        const data = new FormData();

        Array.from(files).forEach((file) => {
            // If you are not using `fs` you might need to specify the folder path along with the filename
            data.append("file", file, `${folder}/${file.name}`);
        });

        const pinataMetadata = JSON.stringify({
            name: `${folder}`,
        });
        data.append("pinataMetadata", pinataMetadata);

        const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.PINATA_JWT_KEY}`,
            },
            body: data,
        });
        const resData = await res.json();
        console.log(resData);
    } catch (error) {
        console.log(error);
    }
};

pinDirectoryToIPFS().then();