require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski story deny ridge coin hunt private slot gate'; 
let testAccounts = [
"0x07ee24a85ec0d8cfca7356820a83fd2fb058e3c5b66073792aecb824989acf5b",
"0xb4a23c7e6a081370fbd36906baac029ad0779e57da64b4a711d77c1ee3f1752c",
"0xcf5cf7864ce28d128f823c72e008ec39bee53fb7dd1c13e222ba0b641d96addf",
"0x68c12f9442c21306d811fea4bbf82c8c1098e93a8bbe22ac393d909f1fad09c8",
"0x95f46a71121b3f9601bfecbdeb0fef638bb0de005c063c83a23e664ef8fa7f74",
"0x612c18fc18ba61a75d9df5d602b8751e6bc5a4477ed9e13c0d10043ef8819cd7",
"0x30f85a14e53ba7805f4dd65bea3546167351a061d10013bf635e8b8037c5ab3c",
"0x77c234fac54b284dcb6c5ab8ed6bc826563ac8ecda6e96c699c7ff8baa5b1ea0",
"0xc465236336516b7edcf141a92c462c1c67c1e7b224be49ba7d1a466a5060e488",
"0xd0d9784fb4c7eb041a9f18deaad91c48f07e786c07cce3c72b9928545366f3ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

