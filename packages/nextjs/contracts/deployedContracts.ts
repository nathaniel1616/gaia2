/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    SportUpdate: {
      address: "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "fixtureSourceCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "MatchSourceCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "functionRouter",
              type: "address",
              internalType: "address",
            },
            {
              name: "donId",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "subscriptionId",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "callbackGasLimit",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "checkUpkeep",
          inputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getJavaScriptSourceCode",
          inputs: [
            {
              name: "codeType",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTodayFixtures",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32[]",
              internalType: "uint32[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTodayFixturesTimestamp",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32[]",
              internalType: "uint32[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "handleOracleFulfillment",
          inputs: [
            {
              name: "requestId",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "response",
              type: "bytes",
              internalType: "bytes",
            },
            {
              name: "err",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "performUpkeep",
          inputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendMatchRequest",
          inputs: [
            {
              name: "_javascriptSourceCode",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "requestId",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendStartedMatchRequest",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendTodayFixturesRequest",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDonId",
          inputs: [
            {
              name: "donId",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setForwarderAddress",
          inputs: [
            {
              name: "forwarderAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setFunctionRouter",
          inputs: [
            {
              name: "functionRouter",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setGasLimit",
          inputs: [
            {
              name: "gasLimit",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSubscriptionId",
          inputs: [
            {
              name: "subscriptionId",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setjavacriptCode",
          inputs: [
            {
              name: "javascriptCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "_codeType",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestFulfilled",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestSent",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "EmptySource",
          inputs: [],
        },
        {
          type: "error",
          name: "NoInlineSecrets",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlyRouterCanFulfill",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlySimulatedBackend",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdate__NotOwnerOrForwarder",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__InsufficientBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__NoFixturesToday",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__TransferFailed",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        acceptOwnership: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        owner: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        transferOwnership: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        checkUpkeep: "lib/chainlink-brownie-contracts/contracts/src/v0.8/automation/AutomationCompatible.sol",
        performUpkeep: "lib/chainlink-brownie-contracts/contracts/src/v0.8/automation/AutomationCompatible.sol",
        handleOracleFulfillment:
          "lib/chainlink-brownie-contracts/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol",
      },
    },
  },
  43113: {
    YourContract: {
      address: "0xd853df90e47da01429f69d4b12ffd8d1c88af474",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setGreeting",
          inputs: [
            {
              name: "_newGreeting",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userGreetingCounter",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    SportUpdate: {
      address: "0x371988d2b7646dcb3d8fac2b3a0edac07e57b5f8",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "fixtureSourceCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "MatchSourceCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "functionRouter",
              type: "address",
              internalType: "address",
            },
            {
              name: "donId",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "subscriptionId",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "callbackGasLimit",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "checkUpkeep",
          inputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getJavaScriptSourceCode",
          inputs: [
            {
              name: "codeType",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTodayFixtures",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32[]",
              internalType: "uint32[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTodayFixturesTimestamp",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint32[]",
              internalType: "uint32[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "handleOracleFulfillment",
          inputs: [
            {
              name: "requestId",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "response",
              type: "bytes",
              internalType: "bytes",
            },
            {
              name: "err",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "performUpkeep",
          inputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendMatchRequest",
          inputs: [
            {
              name: "_javascriptSourceCode",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "requestId",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendStartedMatchRequest",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendTodayFixturesRequest",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDonId",
          inputs: [
            {
              name: "donId",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setForwarderAddress",
          inputs: [
            {
              name: "forwarderAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setFunctionRouter",
          inputs: [
            {
              name: "functionRouter",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setGasLimit",
          inputs: [
            {
              name: "gasLimit",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSubscriptionId",
          inputs: [
            {
              name: "subscriptionId",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setjavacriptCode",
          inputs: [
            {
              name: "javascriptCode",
              type: "string",
              internalType: "string",
            },
            {
              name: "_codeType",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestFulfilled",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestSent",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "EmptySource",
          inputs: [],
        },
        {
          type: "error",
          name: "NoInlineSecrets",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlyRouterCanFulfill",
          inputs: [],
        },
        {
          type: "error",
          name: "OnlySimulatedBackend",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdate__NotOwnerOrForwarder",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__InsufficientBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__NoFixturesToday",
          inputs: [],
        },
        {
          type: "error",
          name: "SportUpdates__TransferFailed",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        acceptOwnership: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        owner: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        transferOwnership: "lib/chainlink-brownie-contracts/contracts/src/v0.8/ConfirmedOwner.sol",
        checkUpkeep: "lib/chainlink-brownie-contracts/contracts/src/v0.8/automation/AutomationCompatible.sol",
        performUpkeep: "lib/chainlink-brownie-contracts/contracts/src/v0.8/automation/AutomationCompatible.sol",
        handleOracleFulfillment:
          "lib/chainlink-brownie-contracts/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
