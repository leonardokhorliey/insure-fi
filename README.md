# Insure-Fi

Insure-Fi seeks to give a global chain of users access to on-chain insurance tokens. It focuses on giving people the opportunity to buy insurance packages and pay with stable coins. 

Insurance packages are defined by the contract sooner based on options in the market. These packages could include regular off-chain packages like life insurance, vehicle insurance, house insurance, and so on. Upon creation of these packages, users can then come online and register for the package.
<br>

## Fundamentals
--------------------
The fundamental implementation of Insure-Fi involves three types of users, and they are as below:

1. The verifier, 
2. Regular user and 
3. contract owner. 


A deep dive can be found in the docs [here](https://docs.google.com/document/d/1_G3w3AMofF8dsvJJIiocLK9cbhnXURTEcQKGaXebV0s/edit).


# Running Project

1. Clone the repo
`git clone`

2. Run the following commands 
```
cd insure-fi
npm install
npx hardhat compile
```

3. For a local development Hardhat node, run `npx hardhat node`


# Resources Used

1. [IPFS](https://ipfs.io)
2. [Moralis v2.7.2](https://moralis.io)
3. [Polygon Mumbai Testnet](https://mumbai.polygonscan.com)

<br>

Front end code is available in the `/frontend` directory. Go through the [README.md](https://github.com/leonardokhorliey/de-insurance/tree/main/frontend/README.md) for details on how to run locally.

<br>

# Verified Contract Addresses

`Insure-Fi Token (ERC1155)` - https://mumbai.polygonscan.com/address/0x573012c81026C769A8f84982C2Fe139454940268#code

`Verifier Contract` - https://mumbai.polygonscan.com/address/0x217Ae41E9C41e7DBF846D66B794b8521C6390702#code

`Insure-Fi Main Contract` - https://mumbai.polygonscan.com/address/0xbF594DF1CFD69cA24cf99eDFDc4B7545581CE261#code
