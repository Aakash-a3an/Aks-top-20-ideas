import React from "react";
import logo from "../../../assets/Prof.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    window.open("https://aakash-a3an.github.io/portfolio/", "_blank");
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center shadow-lg border rounded-lg p-4">
      <button
        onClick={() => navigate("/new")}
        className="btn btn-primary btn-sm md:btn-md"
      >
        Add Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <button className="w-11 md:w-16" onClick={handleClick}>
        <img src={logo} alt="Logo" className="rounded-full" />
      </button>
    </div>
  );
};

export default Header;
