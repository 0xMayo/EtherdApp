import { fetchBlockNumber } from "./http.js";
import { updateBlockNumber } from "./dom.js";

const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');

let accounts;

async function checkBalance() {
  if (typeof ethereum !== undefined) {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
 
    // Get the balance...
    const balance = await ethereum.request({ method: 'eth_getBalance', params: [accountInput.value, 'latest'] });
 
    // Convert to something
    const parsedBalanced = parseInt(balance) / Math.pow(10, 18);
    displayBalance.innerText = parsedBalanced;
  } else {
    console.log('No ethereum');
  }
}
 
async function sendFunds() {
  try {
    const amount = parseFloat(valueInput.value) * Math.pow(10, 18);
    let params = [
      {
        from: accountInput.value,
        to: toAccountInput.value,
        value: Number(amount).toString(16),
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16)
      },
    ];
    // Make the transaction
    const response = await ethereum.request({
      method: 'eth_sendTransaction',
      params: params,
    });
    console.log('Transaction hash:', response);
  } catch (error) {
    console.log(error);
  }
}


fetchBlockNumber();
updateBlockNumber();



checkBalanceButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendFunds);