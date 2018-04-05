'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import web3

var web3 = void 0; //assigned varialbe that will be reassigned below

/*this if statement checks if the user
has the Metamask plugin on their browser
Or if they are running the code on the server

*/
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //if user in the browser undefined is returned
  //in the browser & Metamask is running
  //then create a constructor for Web3
  web3 = new _web2.default(window.web3.currentProvider); //take the provider and use it.
} else {
  //we are on the server OR the user has no Metamask plugin

  // make a provider using Infura API as a portal to the ethereum network
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/iNftQ3ssZ2gozQlp7iB1');
  //once again create the final instance of Web3
  web3 = new _web2.default(provider);
}

//contructor has capital W and the instance is lower case w
//const  web3 = new Web3(window.web3.currentProvider); //create a instance of web3 connecting to Metamask


exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQSxBQUFPOzs7Ozs7QUFBaUI7O0FBRXhCLElBQUksWSxBQUFKLEdBQVE7O0FBRVI7Ozs7O0FBS0EsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTREO0FBQzVEO0FBQ0E7QUFDRTtTQUFPLEFBQUksa0JBQU0sT0FBQSxBQUFPLEtBSCtDLEFBR3ZFLEFBQU8sQUFBc0IsaUJBSDBDLEFBQUcsQ0FHNUIsQUFDL0M7QUFKRCxPQUlLLEFBQ0w7QUFFRTs7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNqQixBQUVGO0FBQ0E7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUVmOzs7QUFFRDtBQUNBLEFBR0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhdmlkbGFya2luL0NvZGUvZXRoZXJldW0vVmVyYWNpdHkifQ==