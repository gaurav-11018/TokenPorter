// hooks/useTokenBalance.js
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const useTokenBalance = (provider, account, tokenContractAddress) => {
  const [tokenBalance, setTokenBalance] = useState("");

  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (provider && account && tokenContractAddress) {
        const token = new ethers.Contract(
          tokenContractAddress,
          ["function balanceOf(address) view returns (uint256)"],
          provider
        );
        const balance = await token.balanceOf(account);
        setTokenBalance(ethers.utils.formatEther(balance));
      } else {
        setTokenBalance("");
      }
    };

    fetchTokenBalance();
  }, [provider, account, tokenContractAddress]);

  return { tokenBalance };
};

export default useTokenBalance;
