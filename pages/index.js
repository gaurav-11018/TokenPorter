import React, { useState, useEffect } from "react";
import Navbar from "../hooks/Navbar";
import useEthersProvider from "../hooks/useEthersProvider";
import useTokenBalance from "../hooks/useTokenBalance";
import useTransferToken from "../hooks/useTransferToken";

const App = () => {
  const { provider, connect, isConnected } = useEthersProvider();
  const [account, setAccount] = useState("");
  const { tokenBalance } = useTokenBalance(provider, account);
  const { transferToken } = useTransferToken(provider, account);
  const [recipient, setRecipient] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  useEffect(() => {
    const fetchAccount = async () => {
      if (provider) {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log("Account fetched:", address);
        setAccount(address);
      } else {
        console.log("No provider available");
        setAccount("");
      }
    };

    fetchAccount();
  }, [provider]);

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
      <Navbar provider={provider} connect={connect} isConnected={isConnected} />
      <div>
        <div>
          <p>Account: {account}</p>
          <p>Token Balance: {tokenBalance || "N/A"}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipient" className="label1">
              Recipient Address:{" "}
            </label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              required
            />
          </div>
          <div>
            <label className="label1" htmlFor="transferAmount">
              Transfer Amount:{" "}
            </label>
            <input
              type="text"
              id="transferAmount"
              value={transferAmount}
              onChange={handleTransferAmountChange}
              required
            />
          </div>
          <button type="submit" className="submit">
            Transfer Tokens
          </button>
        </form>
        <style jsx>{`
          form {
            position: absolute;
            width: 745px;
            height: 414px;
            left: 398px;
            top: 242px;
            background: linear-gradient(
              90deg,
              #e1f400 0%,
              rgba(21, 255, 0, 0.538542) 0.01%,
              #00ffe0 100%
            );
            border-radius: 12px;
          }

          .label1 {
            margin-left: 100px;
            margin-top: 200px;
            width: 400px;
            height: 39.11px;
            font-family: "Arial";
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 37px;
            color: #000000;
          }
          input {
            width: 319px;
            height: 55px;
            background: #ffffff;
            border-radius: 16px;
            border: none;
            margin-top: 65px;
          }
          #transferAmount {
            width: 350px;
          }
          .submit {
            position: absolute;
            margin-top: 50px;
            background-color: #007bff;
            color: #ffffff;
            font-size: 16px;
            padding: 10px 24px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            outline: none;
            top: 241px;
            left: 281px;
          }
        `}</style>
      </div>
    </>
  );
};

export default App;
