var myVallet = artifacts.require("./MyWallet.sol");
var myVote = artifacts.require("./MyVote.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(myVallet);
    deployer.deploy(myVote);

    //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
};
