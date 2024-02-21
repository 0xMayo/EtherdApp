import { fetchBlockNumber } from "./http.js";

export async function updateBlockNumber() {
  try {
    const blockNumber = await fetchBlockNumber();
    console.log('Block Number:', blockNumber);
    
    // Update the block number on the page
    const blockNumberElement = document.getElementById('blockNumber');
    if (blockNumberElement) {
      blockNumberElement.textContent = `${blockNumber}`;
    } else {
      console.error('Block number element not found');
    }
  } catch (error) {
    console.error('Error fetching block number:', error);
  }
}

// Call the function to update the block number on page load
updateBlockNumber();