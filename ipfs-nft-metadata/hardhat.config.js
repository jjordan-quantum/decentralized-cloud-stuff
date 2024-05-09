/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
//require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
require('dotenv').config();
const { API, PRIVATE_KEY } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      //url: API,
      //accounts: [`0x${PRIVATE_KEY}`]
    },
    localhost: {
      url: API,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
};