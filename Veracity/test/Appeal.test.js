const assert = require('assert');//assert module
const ganache = require('ganache-cli');//ganache cli
const Web3 = require('web3');//web3 constructuor
const web3 = new Web3(ganache.provider());//we make an instance of Web3

//require both Json instances of the contracts which are stored locally
const compiledGenerator = require('../ethereum/build/AppealGenerator.json');
const compiledAppeal = require('../ethereum/build/Appeal.json');


let accounts;//listing of all the differnt accoutns on the local Ganache network
let generator;//deployed instance of the generator contract
//the genetor in the beforeEach assings the values to this variables
let appealAddress// Instance of address
let appeal;//Instance of an appeal

//
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();//getting the list of acounts
//deploy an instance of the generator contractor. Use a contract constructor as part of the Web3 library
//and pass in the interface of the compiledGenerator
  generator = await new web3.eth.Contract(JSON.parse(compiledGenerator.interface))//Parse the Json format
    .deploy({ data: compiledGenerator.bytecode })// Instance deployed. data - is the bytecode property
    .send({ from: accounts[0], gas: '1000000' });// send the transaction by specify the account and the gas limit

//call the createAppeal funciton. We are expected to pass a minimum donations
  await generator.methods.createAppeal('100').send({//set the minimum as 100 | .send is sending the transaction
    from: accounts[0],//this sets the first account to be the owner
    gas: '1000000'// the gas is set to 1 milllion as an arbiary value
  });

//listing of a deployed appeal from the array
  const addresses = await generator.methods.getDeployedAppeals().call();//.call is just viewing data no modifications
  appealAddress = addresses [0];
  appeal = await new web3.eth.Contract(//sets the appeal to the contract using Web3
    JSON.parse(compiledAppeal.interface),//javascript representation of the contract
    appealAddress//the address on the blockchain where the appeal contract exists
  );
});

//this test makes sure the Appeal and the AppealGenerator are deployed to the blockchain
//Its tested by checking if they both have an address. Check its properties for an
describe('Appeals', () => {//inside the describe statement add an it block
  it('deploys an appeal generator and an appeal', () => {
    assert.ok(generator.options.address);
    assert.ok(appeal.options.address);
  });


  it('flags user who called CreateAppeal as the appeal owner', async () => {
//call the owner method on the Appeal
    const owner = await appeal.methods.owner().call();
//compare the address of the owner to the account at zero
    assert.equal(accounts[0], owner);
  });

  it('allows users to donate money and flags them as approvers', async () => {
    await appeal.methods.donate().send({ //donates some money
      value: '200',
      from: accounts[1]
    });
    const isDonator = await appeal.methods.donators(accounts[1]).call();//pass in the accounts at 1 .call is for data lookup
    assert(isDonator);
  });


  it('requires a min donation', async () => {
    try {
      await appeal.methods.donate().send({//call the donate method and send a value
        value: '5', // the amount sent is less than the minimum
        from: accounts[1]// the account sending the funds
      });
      assert(false);//if this excuted the test fails
    } catch (err) {
      assert(err);
    }
  });

  it('allows a owner to make a payment request', async () => {
    await appeal.methods
    /*
    It takes 3 arguments
    Pass in the String Description
    Pass in the value of money
    The destination address
    */
      .createSpend('Buy medicine', '100', accounts[1])
      .send({// call send to modify the data on the contract
        from: accounts[0],//0 is the owners address
        gas: '1000000'
      });
      //go back into the contract and get the request which was just created
      //specify the index we want to retrive from
    const request = await appeal.methods.spendrequests(0).call();
    // ensures the description has a value just to confirm its reads the Struct
    assert.equal('Buy medicine', request.description);
  });


//End to end test

  it('processes spend requests', async () => {
    //donate some money to the appeal & attempt to send it
    await appeal.methods.donate().send({
      from: accounts[0],//from the first account
      value: web3.utils.toWei('20', 'ether')//use web3 to send money
    });

    await appeal.methods
    //call the createSpend function and pass the arguments (Description, amount, destination)
      .createSpend('Insert Description', web3.utils.toWei('10', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });//specify the from account and the Gas limit

// Call the voting fucntionaly by calling approveSpend
//specify the index of the request. Its 0 as there is only one request created
    await appeal.methods.approveSpend(0).send({
      from: accounts[0],
      gas: '1000000'
    });
//call the finalizeSpend method passing the index
    await appeal.methods.finalizeSpend(0).send({
      from: accounts[0],
      gas: '1000000'
    });

  //retrive the balance of an account
    let balance = await web3.eth.getBalance(accounts[1]);
  //transfer the balacnce from Wei to Ether using the Web3 util
    balance = web3.utils.fromWei(balance, 'ether');
  //parseFloat is a built in helper included in javascript that
  //takes a String and trys to turn it into a decimal
    balance = parseFloat(balance);

    console.log (balance);

  });
});
