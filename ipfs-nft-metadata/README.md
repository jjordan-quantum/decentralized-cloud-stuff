# IPFS NFT MetaData

This project demonstrates the creation of an NFT contract that stores metadata on IPFS, using local hardhat node.

1. Install deps:

```shell
npm i
```

2. Run hardhat node in separate window:

```shell
npx hardhat node
```

3. Set env vars in `.env` file using `example.env` as a template. Use private key, address and node url from hardhat node running in other terminal window.

4. Deploy contract:

```shell
npx hardhat --network localhost run scripts/deploy.js
```

5. Update CONTRACT_ADDRESS in .env file.

6. Upload resources/img folder to IPFS and get CID for folder.

7. Update image URI in all files in resources/metadata folder with CID from uploaded folder.

8. Upload resources/metadata folder to IPFS and get CID for folder.

9. Update BASE_URI in `.env` file with DIC from metadata folder.

10. Set Base URI in contract:

```shell
npx hardhat --network localhost run scripts/setBaseURI.js
```


