require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL='https://eth-sepolia.g.alchemy.com/v2/b9vS1XRL5norjXpaDeW_2XSJBA_-9Nkn';
const PRIVATE_KEY='a7344b5fdf865f3d28191d14dd2785313e5f3b7d910d396121ed2d0cb5b92823';
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
        url:SEPOLIA_URL,
       accounts:[PRIVATE_KEY],
    }
  }
};
