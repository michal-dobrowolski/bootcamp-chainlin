let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
   
    log("----------------------------------------------------")
    const myFirstSmartContract = await deploy('MyFirstSmartContract', {
        from: deployer,
        args: [],
        log: true
    })
    log("Run My First Smart Contract with command:")
    log("npx hardhat read-number --contract " + myFirstSmartContract.address + " --network " + networkConfig[chainId]['name'])
    log("----------------------------------------------------")
}