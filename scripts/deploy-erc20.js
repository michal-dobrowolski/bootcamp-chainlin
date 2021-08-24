async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
 
    const ERC20 = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await ERC20.deploy(1000000);
    console.log("Deployed ERC20 contract address:", deployedContract.address);
 
 
    await deployedContract.transfer("0x10283005186f7Bf9180C549dF7e437bF3404541B", 150000)
 
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
