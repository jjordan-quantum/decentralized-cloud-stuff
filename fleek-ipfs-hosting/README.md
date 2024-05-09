# Fleek IPFS Hosting

Start by installing the fleek-cli globally:

```shell
npm install -g @fleekxyz/cli
```

Log into your account with fleek:

```shell
fleek login
```

Install deps:

```shell
npm i
```

A single line was added to the `package.json` file:

```json
{
  "homepage": "."
}
```

Try running your app locally with:

```shell
npm start
```

Build the application with:

```shell
npm run build
```

Initialize fleek project and follow the prompts:

```shell
fleek sites init
```

Deploy the site:

```shell
fleek sites deploy
```

The output will include the IPFS link.
