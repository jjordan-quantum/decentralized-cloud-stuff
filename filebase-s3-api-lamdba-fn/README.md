# Filebase S3 API Lambda Function Example

This is a very simple example that shows how to upload a file to a filebase S3 bucket using a lambda function.

The function does not accept any inputs and only uploads a local file (local to the lambda env), so it's not that useful - really just a demonstration.

1. Create a bucket by navigating to [Buckets page](https://console.filebase.com/buckets)
2. Add bucket name to `.env` file for `BUCKET_NAME`
3. Get creds from  [Filebase Access Keys page](https://console.filebase.com/keys) and add to `.env` file:
