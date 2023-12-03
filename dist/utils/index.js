"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFeeHistory = exports.avg = exports.validatePercentiles = exports.getEIP1559GasFee = void 0;
const getEIP1559GasFee = (baseFee, maxPriorityFee, priorityFeeBufferPercent = 0) => {
    const buffer = Math.round((Number(maxPriorityFee) * priorityFeeBufferPercent));
    maxPriorityFee = maxPriorityFee + BigInt(buffer);
    //https://www.blocknative.com/blog/eip-1559-fees
    const maxFee = (2n * BigInt(baseFee)) + maxPriorityFee;
    return { maxFee: maxFee, maxPriorityFee: maxPriorityFee };
};
exports.getEIP1559GasFee = getEIP1559GasFee;
const validatePercentiles = (percentiles, numElements = 3) => {
    if (percentiles.length !== numElements) {
        throw new Error(`percentilesList must have ${numElements} elements`);
    }
    percentiles.forEach((p) => {
        if (p < 1 || p > 99)
            throw new Error("percentilesList elements must be between 1 and 99");
    });
};
exports.validatePercentiles = validatePercentiles;
const avg = (arr) => {
    const sum = arr.reduce((a, v) => a + v);
    return Math.round(sum / arr.length);
};
exports.avg = avg;
/* eslint-disable @typescript-eslint/no-explicit-any */
const formatFeeHistory = (result, numberOfBlocks) => {
    let blockNum = parseInt(result.oldestBlock);
    let index = 0;
    const blocks = [];
    while (blockNum < parseInt(result.oldestBlock) + numberOfBlocks) {
        blocks.push({
            number: blockNum,
            baseFeePerGas: BigInt(result.baseFeePerGas[index]),
            gasUsedRatio: Number(result.gasUsedRatio[index]),
            priorityFeePerGas: result.reward[index].map((x) => x),
        });
        blockNum += 1;
        index += 1;
    }
    return blocks;
};
exports.formatFeeHistory = formatFeeHistory;
