import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";

const useEthersProvider = () => {
  const [provider, setProvider] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum && isConnected) {
      const ethersProvider = new Web3Provider(window.ethereum);
      setProvider(ethersProvider);
      console.log("Connected to provider:", ethersProvider);
    } else {
      setProvider(null);
      console.log("No Ethereum provider found");
    }
  }, [isConnected]);

  const connect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length === 0) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        }
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to provider:", error);
      }
    }
  };

  return { provider, connect };
};

export default useEthersProvider;
