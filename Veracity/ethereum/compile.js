/*
This is required to feed the file into the solidity compiler,  which compiles the contracts and saves them to the project directory
They are saved to the build folder
Anytime the compile scriipt is run it does the following setps
 It will delete the build folder
Read the CharityAppeal.sol from the contracts folder
Complile the contracts with the solidty compiler
Write the output to the build directory
There are two files one for each contract.   One for the Appeal Contract and the other for the AppealGenerator contract as these are two sepearte objects.
They get written to the build directory as Json files.
When we need to access the ABI (bytecodes of the contracts) they can be read from the build directory
*/



//import modules
const path = require('path');
const solc = require('solc');//solidity compiler
const fs = require ('fs-extra');//part of the node standard library. Give access to the filesystem

//delete the build folder if it already exists
//to get a referecne to the folder use resolve method and the path module
//__dirname - gets into the Ethereum directory. 'build' - runs the build script
const buildPath = path.resolve(__dirname, 'build');
// Call function on fs module to remove the drectory and everything inside
fs.removeSync(buildPath);//removeSync does the delete

//path to the Appeal.sol file
const appealPath = path.resolve(__dirname, 'contracts', 'CharityAppeal.sol');
//read in the source code from the file. Pass in the path and specify the encoding utf8
const source = fs.readFileSync(appealPath, 'utf8');

//use the soldity compiler. This pulls the contracts property and asigns it to output
const output = solc.compile(source, 1).contracts;

//ensure the build folder exists using ensureDirSync it will create it if not
fs.ensureDirSync(buildPath);

/*Loop over the contract output and for each contract that exists write it to a file
Itereates over both contract and pulls the key :Appeal :AppealGenerator
the outputJsonSync writes it to a Json file
we pass in the build path with the contract and append the .json extension
output[contract] writes out the entire contract
replace(':','')- removes the colons from the name of the contracts for neatness
*/
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
