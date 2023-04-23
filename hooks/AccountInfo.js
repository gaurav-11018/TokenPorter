import React from "react";

const AccountInfo = ({ address, tokenBalance }) => {
  return (
    <div className="account-info">
      <p>Ethereum Address: {address || "Not connected"}</p>
      <p>Token Balance: {tokenBalance || "N/A"}</p>
      <style jsx>{`
        .account-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background-color: #e6f7ff; // Choose a color for the div background
          padding: 10px;
          border-radius: 4px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default AccountInfo;
