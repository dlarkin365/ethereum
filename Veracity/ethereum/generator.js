import web3 from './web3';  //imports instance which was created (not Constructor lowercase w)

//to tell web3 of an already deployed contract it has to be able to access
//its interface which is stored in the json file
import AppealGenerator from './build/AppealGenerator.json';

//create the contract instance of the specific contract
const instance = new web3.eth.Contract(
  // pass the interface ABI as the first argument
  JSON.parse(AppealGenerator.interface),
  //2nd argument is the address of the deployed contract
  '0x7e49D50C665F766c0A286d1d64af6A9EdBD5A494'

);

export default instance;
