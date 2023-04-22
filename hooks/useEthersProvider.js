// hooks/useEthersProvider.js
import { useState, useEffect } from "react";
const ethers = require("ethers");

const useEthersProvider = () => {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const connect = async () => {
      if (window.ethereum) {
        console.log("Signing in with Metamask");
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        console.log("provider", provider);
        console.log("web3Provider:", provider);
        console.log("web3Provider:", provider.getSigner());
        console.log("web3Provider:", provider.getSigner().getAddress());
        setProvider(provider);
      }
    };
    connect();
  }, []);

  return { provider };
};

export default useEthersProvider;
