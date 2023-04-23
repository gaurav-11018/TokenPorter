import React from "react";

const Navbar = ({ provider, connect, isConnected }) => {
  const handleConnect = async () => {
    if (!provider) {
      try {
        await connect();
      } catch (err) {
        console.error(`Connection failed: ${err.message}`);
      }
    }
  };

  return (
    <div className="navbar">
      <div />
      <h1 className="project-name">Token Porter</h1>
      <button
        className="connect-button"
        onClick={handleConnect}
        disabled={isConnected}
      >
        {isConnected ? "Connected" : "Connect"}
      </button>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f9fa;
          height: 60px;
          padding: 0 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .project-name {
          position: absolute;
          width: 366px;
          height: 69px;
          left: 587px;
          top: 100px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 60px;
          line-height: 69px;
        }

        .connect-button {
          margin-top: 25px; // Adjust this value to move the button up or down
          background-color: #007bff;
          color: #ffffff;
          font-size: 16px;
          padding: 10px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
        }

        .connect-button:hover {
          background-color: #0056b3;
        }

        .connect-button:disabled {
          background-color: #6c757d;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
