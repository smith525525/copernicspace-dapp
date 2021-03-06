/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { Divisible, DivisibleInterface } from '../Divisible'

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256[]',
        name: 'listOfNumSizes',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'listOfStepSizes',
        type: 'uint256[]'
      }
    ],
    name: 'batchDivideInto',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'mintedIDs',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'disableToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'divisionOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'divID',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'enableToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getMinStepSize',
    outputs: [
      {
        internalType: 'uint256',
        name: 'minStepSize',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getWeight',
    outputs: [
      {
        internalType: 'uint256',
        name: 'weight',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'isDivisible',
    outputs: [
      {
        internalType: 'bool',
        name: '_isDivisible',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_idToJoinBack',
        type: 'uint256'
      }
    ],
    name: 'joinBack',
    outputs: [
      {
        internalType: 'uint256',
        name: 'joinedToID',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'makeDivisible',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'makeNotDivisible',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_stepSize',
        type: 'uint256'
      }
    ],
    name: 'setMinStepSize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_weight',
        type: 'uint256'
      }
    ],
    name: 'setWeight',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_stepNum',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_stepSize',
        type: 'uint256'
      }
    ],
    name: 'stepDivideInto',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'mintedIDs',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

export class Divisible__factory {
  static readonly abi = _abi
  static createInterface(): DivisibleInterface {
    return new utils.Interface(_abi) as DivisibleInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Divisible {
    return new Contract(address, _abi, signerOrProvider) as Divisible
  }
}
