require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name release machine slow good end army gather'; 
let testAccounts = [
"0x32d77925193eea6461c0b1058cb0e6329769668f094685b4d1d478a735eb1ffb",
"0x25b45b864058dd2b64c54439acdebcf0c65334de4387df5fa6589d80c063ade1",
"0xbc6157bff78b1f7239b213fab16403e18fabcb844464ca3dd61e5a778847a434",
"0x5e38331c6545ed8afdd5740bbe5a1b9eaa175fbbf1a5b1bbcc93056763a414ca",
"0x43c9950b43bb53eb24f759cdfcee615fe2ede9a2267d38f009bca0fa2fa408ed",
"0x7ac7d7d11558b5b4c01893ac19fbd09092e07e43370ed0d49aa10ca997af681f",
"0x1690a932d35c09eed69648a024697ea86cec6b1feb808adcb6f8c61db63bf75d",
"0xe7fcbd46af6a34b6f2089215ee708eb8495cdba7a1cc5d1e3a3613ca95b305b7",
"0xef427655c646add0663c16be5cee88789cb507f1848c9051a718c56be4c4ad2f",
"0xbae728a2b32f1e870fff48a4a51834b751ac91558928d657be8f79deb68b9846"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


