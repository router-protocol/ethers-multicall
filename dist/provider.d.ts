import { ethers } from 'ethers';
import { ContractCall } from './types';
export declare class Provider {
    private _provider;
    private _multicallAddress;
    constructor(provider: any, chainId?: number);
    init(): Promise<void>;
    getEthBalance(address: string): any;
    all<T extends any[] = any[]>(calls: ContractCall[]): Promise<T>;
}
export declare function setMulticallAddress(chainId: number, address: string): void;
