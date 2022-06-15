const path = require('path');
const fs = require('fs');
const solc = require('solc');


const voting_path = path.resolve(__dirname,'contract','voting.sol');
const source = fs.readFileSync(voting_path,'utf8');


console.log(solc.compile(source,1));