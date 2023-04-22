// hooks/useTransferToken.js
import { ethers } from "ethers";

const useTransferToken = (provider, fromAddress, tokenContractAddress) => {
  const transferToken = async (toAddress, amount) => {
    if (provider && fromAddress && tokenContractAddress) {
      const token = new ethers.Contract(
        tokenContractAddress,
        ["function transfer(address to, uint256 value) public returns (bool)"],
        provider.getSigner()
      );
      const weiAmount = ethers.utils.parseUnits(amount, "ether");
      const tx = await token.transfer(toAddress, weiAmount);
      await tx.wait();
      return true;
    } else {
      throw new Error(
        "Provider, fromAddress, or tokenContractAddress is missing"
      );
    }
  };

  return { transferToken };
};

export default useTransferToken;
