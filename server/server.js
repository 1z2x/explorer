const express = require('express');
const app = express();
const port = 3000;

const Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:8545')


app.get('/', async (req, res) => {
  let block = await getLatestBlock();
  res.send(block);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function getLatestBlock() {
  let blockNumber = await web3.eth.getBlockNumber();
  let block = await web3.eth.getBlock(blockNumber);
  console.log(block);
  return block;
}