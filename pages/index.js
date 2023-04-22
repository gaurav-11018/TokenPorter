import React, { useState, useEffect } from "react";
import Navbar from "../hooks/Navbar";
import useEthersProvider from "../hooks/useEthersProvider";
import useTokenBalance from "../hooks/useTokenBalance";
import useTransferToken from "../hooks/useTransferToken";

const Home = () => {
  const { provider } = useEthersProvider();
  const [account, setAccount] = useState("");
  const [tokenContractAddress, setTokenContractAddress] = useState("");
  const { tokenBalance } = useTokenBalance(
    provider,
    account,
    tokenContractAddress
  );
  const { transferToken } = useTransferToken(
    provider,
    account,
    tokenContractAddress
  );
  const [recipient, setRecipient] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  useEffect(() => {
    const fetchAccount = async () => {
      if (provider) {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } else {
        setAccount("");
      }
    };

    fetchAccount();
  }, [provider]);

  const handleTokenContractAddressChange = (e) => {
    setTokenContractAddress(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleTransferAmountChange = (e) => {
    setTransferAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await transferToken(recipient, transferAmount);
      alert("Transfer successful");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <p>Account: {account}</p>
        <p>Token Balance: {tokenBalance}</p>
      </div>
      <div>
        <label htmlFor="tokenContractAddress">Token Contract Address:</label>
        <input
          type="text"
          id="tokenContractAddress"
          value={tokenContractAddress}
          onChange={handleTokenContractAddressChange}
          required
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipient">Recipient Address:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            required
          />
        </div>
        <div>
          <label htmlFor="transferAmount">Transfer Amount:</label>
          <input
            type="text"
            id="transferAmount"
            value={transferAmount}
            onChange={handleTransferAmountChange}
            required
          />
        </div>
        <button type="submit">Transfer Tokens</button>
      </form>
    </>
  );
};

export default Home;
