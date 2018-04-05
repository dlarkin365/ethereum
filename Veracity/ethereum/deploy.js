const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledGenerator = require ('./build/AppealGenerator.json');

const provider = new HDWalletProvider(
  // this the mneumonic of my account on Rinkeby
  //'own few rack pitch fall cool glad elegant farm country tide gas',
  'own few rack pitch fall cool glad elegant farm country tide gas',
  // this is the link provided by the Infura API
  'https://rinkeby.infura.io/iNftQ3ssZ2gozQlp7iB1'
);

const web3 = new Web3(provider);

const deploy = async () => {

const accounts = await web3.eth.getAccounts();

console.log ('Attmepting to deploy from account'), accounts[0];

const result = await new web3.eth.Contract(JSON.parse(compiledGenerator.interface))
    //.deploy({ data: bytecode, arguments: ['Hi there!'] })
    //.send({ gas: '1000000', from: accounts[0] });
    .deploy({ data: compiledGenerator.bytecode})
    .send ({ gas: '1000000', from: accounts[0] });


  console.log ('Contract deployed to', result.options.address);

};
deploy();
