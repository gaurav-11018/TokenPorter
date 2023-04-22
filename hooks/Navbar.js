// components/Navbar.js
import React from "react";
import useEthersProvider from "../hooks/useEthersProvider";

const Navbar = () => {
  const { provider } = useEthersProvider();

  return (
    <div>
      <h1>Token Balance and Transfer DApp</h1>
      <p>Provider: {provider ? "Connected" : "Not connected"}</p>
    </div>
  );
};

export default Navbar;
