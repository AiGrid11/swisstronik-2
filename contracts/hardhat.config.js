require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "PASTE UR PRIVATE KEY WITHOUT 0X";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `$6d1b58fa4582e2b0b249cb11d6819fa6cbdb42688d301b03d56b2423d0d540b1`],
    },
  },
};
