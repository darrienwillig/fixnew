import { ethers } from "ethers";
import { GasFee, GasFeeTracker } from "./types";
/**
 * This function returns the estimated gas fee to be paid for a transaction.
 * @param {ethers.JsonRpcProvider} provider EthersJs JsonRpcProvider
 * @param {boolean} legacy Set to true to return legacy gas fee (pre London-hardfork or pre EIP-1559)
 * @param {number} priorityFeeBufferPercent Percentage of maxPriorityFee to add to maxPriorityFee as a buffer.
 * Should be between 0 and 1
 * @returns {GasFee} Legacy gas fee (pre London-hardfork or pre EIP-1559) or EIP-1559 gas fee
 */
export declare function gasFee(provider: ethers.JsonRpcProvider, legacy?: boolean, priorityFeeBufferPercent?: number): Promise<GasFee>;
/**
  * This function returns the estimated gas fees to be paid for a transaction at slow, average, and fast speeds.
 * @param {ethers.JsonRpcProvider} provider EthersJs JsonRpcProvider
 * @param numberOfBlocks The number of blocks preceding the latest block to use in the calculation
 * @param percentilesList A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order.
 * Must have 3 elements and each element must be between 1 and 99.
 * @returns {GasFeeTracker} An object containing slow, average, and fast gas fees.
 * @Notice This functions is inspired from https://docs.alchemy.com/docs/how-to-build-a-gas-fee-estimator-using-eip-1559
 */
export declare function gasFeeTracker(provider: ethers.JsonRpcProvider, numberOfBlocks?: number, percentilesList?: number[]): Promise<GasFeeTracker>;
