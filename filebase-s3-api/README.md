# Filebase S3 API

1. Create a bucket by navigating to [Buckets page](https://console.filebase.com/buckets)
2. Add bucket name to `.env` file for `BUCKET_NAME`
3. Get creds from  [Filebase Access Keys page](https://console.filebase.com/keys) and add to `.env` file:

```js
AWS_ACCESS_KEY_ID=FILEBASE_KEY
AWS_SECRET_ACCESS_KEY=FILEBASE_SECRET
```

4. Upload and pin the file `src/my-file` to the filebase bucket using the following command, which really just runs `src/main.js`:

```shell
npm run upload
```
