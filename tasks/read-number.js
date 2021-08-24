task("read-number", "Calls an MyFirstSmartContract Contract to read number")
  .addParam(
    "contract",
    "The address of the MyFirstSmartContract contract that you want to call"
  )
  .setAction(async ({ contract }, hre) => {
    console.log(
      "Calling MyFirstSmartContract contract ",
      contract,
      " on network ",
      hre.network.name
    );

    const result = await hre.requestData(hre, contract);

    console.log(
      "Contract ",
      contract,
      " external data request successfully called. Transaction Hash: ",
      result.hash
    );
    console.log("Run the following to read the returned result:");
    console.log(
      "npx hardhat read-number --contract " +
        contract +
        " --network " +
        hre.network.name
    );
  });


 