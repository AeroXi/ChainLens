import contract from "./contract.js";

import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  temperature: 0.8,
  messages: [
        {"role": "system", "content": "You are a smart contract auditor, explain the solidity code to user"},
        {"role": "user", "content": contract},
        {"role": "user", "content": "提现时开发者能分到多少？"}
  ]
});
console.log(response.data.choices[0].message.content);