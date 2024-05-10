# Filebase S3 API Lambda Function Example

This is a very simple example that shows how to upload a file to a filebase S3 bucket using a lambda function.

The function does not accept any inputs and only uploads a local file (local to the lambda env), so it's not that useful - really just a demonstration.

1. Create a bucket by navigating to [Buckets page](https://console.filebase.com/buckets)
2. Save bucket name for lamdba function
3. Get creds from  [Filebase Access Keys page](https://console.filebase.com/keys)
4. Navigate to [Lambda Functions](https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/discover) and press the "Create function" button in the top right hand corner of the page
(this assumes you are logged into your AWS account with lambda functions activated in the us-east-1 region)
5. Give your function a name, then select Node.js V16.x and then press "Create function".
6. Enter the code from `index.js` into the code editor tab.
7. Add another file in the base of the directory called `my-plaintext-file` and give it some random text.
8. Navigate to the "Configuration" tab, then select the "Environment Variables" tab from the menu on the left.
9. Add your filebase creds as `FILEBASE_ACCESS_KEY` and `FILEBASE_SECRET_KEY`, then your bucket name as `BUCKET_NAME`. These environment variables will be exposed to your lamdba function.
10. Navigate back to the "Code" tab and press "Deploy".
11. Next we will execute our function by creating and running a test, so from the "Test" tab create a new test event and give it a name. Press "Save" and then "Test".

Your lambda should have run, and printed output that looks like this:

```shell
START RequestId: 1d1535ff-6513-4384-bd4d-d87dc57589c0 Version: $LATEST
2024-05-10T03:31:10.643Z	1d1535ff-6513-4384-bd4d-d87dc57589c0	INFO	this is my plaintext file
2024-05-10T03:31:11.019Z	1d1535ff-6513-4384-bd4d-d87dc57589c0	INFO	CID: QmYsftp46szC4Q8KmY4MJBS8vJ5kjcg2pxEdLMdj8WBvRo
END RequestId: 1d1535ff-6513-4384-bd4d-d87dc57589c0
REPORT RequestId: 1d1535ff-6513-4384-bd4d-d87dc57589c0	Duration: 426.55 ms	Billed Duration: 427 ms	Memory Size: 128 MB	Max Memory Used: 86 MB	
```

The CID is the hash of the file that was pinned to IPFS using filebase's S3 API.  You should be able to find this file in the bucket now on your filebase dashboard.
