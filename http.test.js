import { test, expect } from "vitest";
import { fetchBlockNumber } from "./src/scripts/http.js";

// Define a test case
test("Test fetchBlockNumber function", async () => {
  // Call the fetchBlockNumber function
  const blockNumber = await fetchBlockNumber();

  // Assert that the block number is a non-negative integer
  expect(blockNumber).toBeGreaterThan(0);
  expect(Number.isInteger(blockNumber)).toBe(true);
});

test("Test the format of the returned value", async () => {
    const blockNumber = await fetchBlockNumber();
  
    // Ensure that the block number is of type 'number'
    expect(typeof blockNumber).toBe('number');
  });

  