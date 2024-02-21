import { settings } from "./config.js";

export async function fetchBlockNumber() {
  const url = `${settings.BASE_URL}${settings.API_KEY}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 1
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return parseInt(data.result, 16); // Convert hexadecimal block number to decimal
  } catch (error) {
    console.error("Error fetching block number:", error);
    throw error;
  }
}