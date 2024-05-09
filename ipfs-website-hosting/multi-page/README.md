# Hosting a Singe Page on IPFS

0. Change the contents of the `author` `meta` tags on each page so that the files get unique hashes (CIDs)
1. Upload `src/multi-page-site` folder to IPFS
2. Get 'SHARE' link (CID)
3. Paste link into browser -> multi-page, navigable website should load
4. Pin CID either on local IPFS desktop or pinning service (works much better - resolves faster)

## Save to IPNS using Command Line

1. Navigate to `multi-oage-site` dir:

```shell
cd src
```

2. Double check that this project has been added to IPFS:

```shell
ipfs add -r .
```

3. Copy the last CID from the output. Publish to IPNS by substituting the copied CID in the following:

```shell
ipfs name publish /ipfs/$CID
```

The output will include a CID that the project was published to:

```shell
> Published to k51qzi5uqu5dh9gnl66grpnpuhj245ha1xq9ajtmuf7swe847zovdg1t9a0xiz: /ipfs/QmchJPQNLE5EUSYTzfzUsNFyPozXyANiZHFDSFKWdLNdRR

````

The project should now be viewable using the published CID:

`https://gateway.ipfs.io/ipns/k51qzi5uqu5dh9gnl66grpnpuhj245ha1xq9ajtmuf7swe847zovdg1t9a0xiz`

Whenever you make any changes to your project, simply re-add your content to IPFS and publish it to IPNS:

```shell
ipfs add -r .

> ...
> added QmchJPQNLE5EUSYTzfzUsNFyPozXyANiZHFDSFKWdLNdRR multi-page-first-step

ipfs name publish QmchJPQNLE5EUSYTzfzUsNFyPozXyANiZHFDSFKWdLNdRR

> Published to k51qzi5uqu5dh9gnl66grpnpuhj245ha1xq9ajtmuf7swe847zovdg1t9a0xiz: /ipfs/QmchJPQNLE5EUSYTzfzUsNFyPozXyANiZHFDSFKWdLNdRR
```

Now refresh the published CID and the updated project should be viewable:

`https://gateway.ipfs.io/ipns/k51qzi5uqu5dh9gnl66grpnpuhj245ha1xq9ajtmuf7swe847zovdg1t9a0xiz`

## Pin Files Using pinata API

1. Update `PINATA_JWT_KEY` in dotenv file
2. Pin `multi-page-site` folder to IPFS using pinata's API:

```shell
npm run pin
```

NOTE: this is not currently working for website folder. Only mock data is being sent to pinata's API

