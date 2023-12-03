import { IGasFee } from "../types";
export declare const getEIP1559GasFee: (baseFee: bigint, maxPriorityFee: bigint, priorityFeeBufferPercent?: number) => IGasFee;
export declare const validatePercentiles: (percentiles: number[], numElements?: number) => void;
export declare const avg: (arr: number[]) => number;
export declare const formatFeeHistory: (result: any, numberOfBlocks: number) => {
    number: number;
    baseFeePerGas: bigint;
    gasUsedRatio: number;
    priorityFeePerGas: any;
}[];
