let LiquidityManagerAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "dexWeight",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint8[]",
                "name": "assetIds",
                "type": "uint8[]"
            },
            {
                "indexed": false,
                "internalType": "uint32[]",
                "name": "assetWeightInDex",
                "type": "uint32[]"
            }
        ],
        "name": "AddDex",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "pendingOwner",
                "type": "address"
            }
        ],
        "name": "PrepareToTransferOwnership",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8[]",
                "name": "assetIds",
                "type": "uint8[]"
            }
        ],
        "name": "SetAssetIds",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "entrypoint",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "initialData",
                "type": "bytes"
            }
        ],
        "name": "SetDexAdapter",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "dexWeight",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32[]",
                "name": "assetWeightInDex",
                "type": "uint32[]"
            }
        ],
        "name": "SetDexWeight",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            }
        ],
        "name": "SetDexWrapperEnable",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "handler",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            }
        ],
        "name": "SetHandler",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "bytes4[]",
                "name": "selectors",
                "type": "bytes4[]"
            }
        ],
        "name": "SetPlugin",
        "type": "event"
    },
    {
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "maxAmounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "validationData",
                "type": "bytes"
            }
        ],
        "name": "addDexLiquidity",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "addedAmounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "liquidityAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "dexType",
                "type": "uint8"
            },
            {
                "internalType": "uint32",
                "name": "dexWeight",
                "type": "uint32"
            },
            {
                "internalType": "uint8[]",
                "name": "assetIds",
                "type": "uint8[]"
            },
            {
                "internalType": "uint32[]",
                "name": "assetWeightInDex",
                "type": "uint32[]"
            }
        ],
        "name": "addDexSpotConfiguration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "claimDexFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            }
        ],
        "name": "freezeDexWrapper",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllDexSpotConfiguration",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint8",
                        "name": "dexId",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "dexType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint32",
                        "name": "dexWeight",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint8[]",
                        "name": "assetIds",
                        "type": "uint8[]"
                    },
                    {
                        "internalType": "uint32[]",
                        "name": "assetWeightInDex",
                        "type": "uint32[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "totalSpotInDex",
                        "type": "uint256[]"
                    }
                ],
                "internalType": "struct DexSpotConfiguration[]",
                "name": "configs",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexAdapter",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "adapter",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "disabled",
                        "type": "bool"
                    }
                ],
                "internalType": "struct DexRegistration",
                "name": "registration",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexAdapterConfig",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "config",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            }
        ],
        "name": "getDexAdapterState",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "state",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "tokenIn",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenOut",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "name": "getDexAmountOut",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexFees",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "tokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "claimedAmounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "pendingAmounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexLiquidity",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "liquidities",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "lpBalance",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexLpBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "lpBalance",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "shareAmount",
                "type": "uint256"
            }
        ],
        "name": "getDexSpotAmounts",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexSpotConfiguration",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint8",
                        "name": "dexId",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint8",
                        "name": "dexType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint32",
                        "name": "dexWeight",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint8[]",
                        "name": "assetIds",
                        "type": "uint8[]"
                    },
                    {
                        "internalType": "uint32[]",
                        "name": "assetWeightInDex",
                        "type": "uint32[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "totalSpotInDex",
                        "type": "uint256[]"
                    }
                ],
                "internalType": "struct DexSpotConfiguration",
                "name": "config",
                "type": "tuple"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            }
        ],
        "name": "getDexTotalSpotAmounts",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "getDexValidationData",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVault",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "vault_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "pool_",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8[]",
                "name": "assetIds",
                "type": "uint8[]"
            }
        ],
        "name": "refreshTokenCache",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "shareAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "minAmounts",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "removeDexLiquidity",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "removedAmounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint8[]",
                "name": "assetIds",
                "type": "uint8[]"
            }
        ],
        "name": "setAssetIds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "uint32",
                "name": "dexWeight",
                "type": "uint32"
            },
            {
                "internalType": "uint32[]",
                "name": "assetWeightInDex",
                "type": "uint32[]"
            }
        ],
        "name": "setDexWeight",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "dexId",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "adapter",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "initialData",
                "type": "bytes"
            }
        ],
        "name": "setDexWrapper",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "handler",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            }
        ],
        "name": "setHandler",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "plugin",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "enable",
                "type": "bool"
            }
        ],
        "name": "setPlugin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newPool",
                "type": "address"
            }
        ],
        "name": "setPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newVault",
                "type": "address"
            }
        ],
        "name": "setVault",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "takeOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]