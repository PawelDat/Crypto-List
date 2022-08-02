import React from "react";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <FaCoins className="icon" />
      <h1> Crypto <span className="green">List</span> </h1>
    </div>
  );
};

export default Navbar;
