import Web3 from 'web3';//import web3

let web3//assigned varialbe that will be reassigned below

/*this if statement checks if the user
has the Metamask plugin on their browser
Or if they are running the code on the server

*/
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {  //if user in the browser undefined is returned
//in the browser & Metamask is running
//then create a constructor for Web3
  web3 = new Web3 (window.web3.currentProvider);//take the provider and use it.
}else{
//we are on the server OR the user has no Metamask plugin

  // make a provider using Infura API as a portal to the ethereum network
  const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/iNftQ3ssZ2gozQlp7iB1'
  );
//once again create the final instance of Web3
web3 = new Web3(provider);

}

//contructor has capital W and the instance is lower case w
//const  web3 = new Web3(window.web3.currentProvider); //create a instance of web3 connecting to Metamask


export default web3;
