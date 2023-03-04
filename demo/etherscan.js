//import dotenv ES6
import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const API_KEY = process.env.ETHERSCAN_KEY;

const CONTRACT_ADDRESS = '0x59ad67e9c6a84e602bc73b3a606f731cc6df210d';


const etherscanApiUrl = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${CONTRACT_ADDRESS}&apikey=${API_KEY}`;

async function getContractSourceCode() {
  try {
    const response = await axios.get(etherscanApiUrl);
    let contractSourceCode = response.data.result[0].SourceCode;
    contractSourceCode = contractSourceCode.slice(1, -1);
    contractSourceCode = JSON.parse(contractSourceCode);
    contractSourceCode = contractSourceCode.sources;
    Object.keys(contractSourceCode).forEach(function(key) {
        console.log(key);
      });


    return contractSourceCode.sources;
  } catch (error) {
    console.error('Failed to get contract source code:', error);
  }
}

getContractSourceCode();
