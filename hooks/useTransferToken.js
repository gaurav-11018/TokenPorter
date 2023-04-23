import { useCallback } from "react";
import { ethers } from "ethers";

const useTransferToken = (provider, senderAddress) => {
  const transferToken = useCallback(
    async (recipientAddress, transferAmount, tokenContractAddress) => {
      if (
        !provider ||
        !senderAddress ||
        !ethers.utils.isAddress(recipientAddress)
      ) {
        throw new Error("Invalid provider, sender, or recipient address");
      }

      const signer = provider.getSigner(senderAddress);
      const value = ethers.utils.parseUnits(transferAmount, 18); // Assuming 18 decimals

      try {
        let transaction;
        if (
          tokenContractAddress &&
          ethers.utils.isAddress(tokenContractAddress)
        ) {
          // Transfer tokens
          const tokenContract = new ethers.Contract(
            tokenContractAddress,
            [
              "function transfer(address to, uint256 value) public returns (bool)",
            ],
            signer
          );
          transaction = await tokenContract.transfer(recipientAddress, value);
        } else {
          // Transfer Goerli ETH
          transaction = await signer.sendTransaction({
            to: recipientAddress,
            value,
          });
        }
        await transaction.wait();
        return transaction;
      } catch (error) {
        console.error("Error while transferring token/ether:", error);
        throw error;
      }
    },
    [provider, senderAddress]
  );

  return { transferToken };
};

export default useTransferToken;
