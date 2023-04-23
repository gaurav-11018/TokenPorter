import { useState, useEffect } from "react";
import { ethers } from "ethers";

const { utils } = ethers;

const useTokenBalance = (provider, account) => {
  const [tokenBalance, setTokenBalance] = useState("N/A");

  useEffect(() => {
    const fetchTokenBalance = async () => {
      console.log("fetching balance with account:", account);
      if (provider && account) {
        try {
          const balance = await provider.getBalance(account);
          console.log("Balance fetched:", balance.toString());
          setTokenBalance(ethers.utils.formatEther(balance));
        } catch (error) {
          console.error("Error fetching balance:", error);
          setTokenBalance("N/A");
        }
      } else {
        setTokenBalance("N/A");
      }
    };

    fetchTokenBalance();
  }, [provider, account]);

  return { tokenBalance };
};

export default useTokenBalance;
