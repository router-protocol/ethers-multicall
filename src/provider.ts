import { ethers } from 'ethers';
import { all } from './call';
import { getEthBalance } from './calls';
import { ContractCall } from './types';

export class Provider {
  private _provider: ethers.providers.Provider;
  private _multicallAddress: string;

  constructor(provider: ethers.providers.Provider, chainId?: number) {
    this._provider = provider;
    this._multicallAddress = getAddressForChainId(chainId);
  }

  public async init() {
    // Only required if `chainId` was not provided in constructor
    this._multicallAddress = await getAddress(this._provider);
  }

  public getEthBalance(address: string) {
    if (!this._provider) {
      throw new Error('Provider should be initialized before use.');
    }
    return getEthBalance(address, this._multicallAddress);
  }

  public async all<T extends any[] = any[]>(calls: ContractCall[]) {
    if (!this._provider) {
      throw new Error('Provider should be initialized before use.');
    }
    return all<T>(calls, this._multicallAddress, this._provider);
  }
}

const multicallAddresses = {
  1: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  3: '0xF24b01476a55d635118ca848fbc7Dab69d403be3',
  4: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
  5: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
  10:'0x55712662c94b0d99d91ef1f72ed4722a1426a2fa',
  25:'0x05bd0695aF629185fd2DCb13a99A3f0E7eF73943',
  30:'0x42b54Baa75e8C3AD4F99cB1936ca6Fc3EeE89c44',
  42: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
  56: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  66: '0x94fEadE0D3D832E4A05d459eBeA9350c6cDd3bCa',
  97: '0x3A09ad1B8535F25b48e6Fa0CFd07dB6B017b31B2',
  100: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
  128: '0x2C55D51804CF5b436BA5AF37bD7b8E5DB70EBf29',
  137: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  250: '0x0118EF741097D0d3cc88e46233Da1e407d9ac139',
  1337: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
  1284: '0x8a35d3d09Ee50013115a1D7a84994A2bf6309b2d',
  2222: '0x758F5ED7D6dfBCb9BCfDFC1f921E8B96eEd5724A',
  42161: '0x813715eF627B01f4931d8C6F8D2459F26E19137E',
  43113: '0x3D015943d2780fE97FE3f69C97edA2CCC094f78c',
  43114: '0x7f3aC7C283d7E6662D886F494f7bc6F1993cDacf',
  80001: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
  1666600000: '0x756f63aF236ac92e8C8BF7Cc503f948666b97d0e',
  1313161554: '0x121ad4dec3b6f90df577664798f66c1b54383bd9',
  7545: '0xCf44A5BCD173039c37a9880cFE40Ba5691859e96',
  8545: '0x98Ef834a3415f8651A99a87929b6244D0c81A8d2',
  2494104990: '0xc18fea06c3f88359dab1a2f708b1298d5ac5caa3',
  5000: '0xcA11bde05977b3631167028862bE2a173976CA11',
  8453: '0xca11bde05977b3631167028862be2a173976ca11',
  534352: '0xca11bde05977b3631167028862be2a173976ca11',
  59144: '0xca11bde05977b3631167028862be2a173976ca11',
};

export function setMulticallAddress(chainId: number, address: string) {
  multicallAddresses[chainId] = address;
}

function getAddressForChainId(chainId: number) {
  return multicallAddresses[chainId];
}

async function getAddress(provider: ethers.providers.Provider) {
  const { chainId } = await provider.getNetwork();
  return getAddressForChainId(chainId);
}
