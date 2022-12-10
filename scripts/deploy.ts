// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import {uploadImage, uploadToIpfs} from "./moralis";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  console.log("Hi")
  const dataForCode = await uploadImage('code.png', true);
  console.log("Yo")
  const dataForPic = await uploadImage('pic.png', false);

  const jsonData1 = await uploadToIpfs([
    {
      path: `2.json`,
      content: dataForCode
    },
  ], false);

  const jsonData2 = await uploadToIpfs([
    {
      path: `3.json`,
      content: dataForPic
    }
  ], false)

  const ipfsUrl = jsonData1[0].path.replace('/2.json', '');

  console.log(ipfsUrl);


  const MockUSDT = await ethers.getContractFactory("ERC20Mock");
  const mockUSDT = await MockUSDT.deploy();

  await mockUSDT.deployed();

  console.log("Token deployed to:", mockUSDT.address);

  const Token = await ethers.getContractFactory("DeInsureToken");
  const token = await Token.deploy();

  await token.deployed();

  await token.createNewPackage('900', jsonData1[0].path);
  await token.createNewPackage('1528', jsonData2[0].path);

  console.log("Token deployed to:", token.address);

  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy(mockUSDT.address);

  await verifier.deployed();

  console.log("Verifier deployed to:", verifier.address);

  const Pool = await ethers.getContractFactory("InsurancePool");
  const pool = await Pool.deploy(mockUSDT.address, verifier.address, token.address);

  await pool.deployed();

  console.log("Pool Manager deployed to:", pool.address);

  await verifier.setPoolAddress(pool.address);
  await token.setPoolAddress(pool.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});