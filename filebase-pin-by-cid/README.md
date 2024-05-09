# Pinning By CID with Filebase

1. Create a bucket by navigating to [Buckets page](https://console.filebase.com/buckets)
2. Generate an access token by navigating to  [Filebase Access Keys page](https://console.filebase.com/keys)
3. Add access token to `.env` file for `BUCKET_API_KEY`

4. Install deps:

```shell
npm i
```

5. A single line was added to the `package.json` file:

```json
{
  "homepage": "."
}
```

6. Try running your app locally with:

```shell
npm start
```

7. Build the application with:

```shell
npm run build
```

8. Save the `build` folder to IPFS with:

```shell
cd build
ipfs add -r .
```

9. Copy the CID of the uploaded `build` folder and set the `CID` variable in the `.env` file.
10. Pin the CID to the filebase bucket using the following command, which really just runs `pin.js`:

```shell
npm run pin
```
