require('@nomiclabs/hardhat-waffle');

module.exports = {
solidity: '0.8.9', // make sure the version matches the one in smart contract file 
networks: {
  rinkeby: {
    url: process.env.ALCHAMY_KEY, // rinkeby key 
    accounts: [process.env.PRIVATE_KEY], // metamask privte key- DO NOT SHARE THIS!! It has access to all your accounts
  },
},
};
