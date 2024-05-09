const hre = require("hardhat");
const {config} = require("dotenv");
config();
const baseURI = `ipfs://${process.env.BASE_URI}/`;

async function main() {
    const BasicNFT = await hre.ethers.getContractFactory("BasicNFT");
    const basicNFT = BasicNFT.attach(
        process.env.CONTRACT_ADDRESS // The deployed contract address
    );
    const result = await basicNFT.name();
    console.log(result);
    const tx = await basicNFT.setBaseURI(baseURI)
    console.log(tx.hash);
    await tx.wait();
    console.log(`setBaseURL success: ${baseURI}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});