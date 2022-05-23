// const _deploy_contracts = require("../migrations/2_deploy_contracts.js")

const KryptonToken = artifacts.require("./KryptonToken.sol")

contract('KryptonToken',function(accounts){
    it('sets the total supply upon deployment',function(){
        return KryptonToken.deployed().then((instance)=>{
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then((totalSupply)=>{
            assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 10 lakh');
        })
    })
})