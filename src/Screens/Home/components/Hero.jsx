import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {

    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-2xl font-bold text-center">
        Top 20 Productive business ideas for your next Startup
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">Like your favorite ideas.</strong>
        Write your best ideas, No SignIn needed!
      </h2>

      <div className="">
        <select
          defaultValue="Select Theme"
          onChange={(event) => {
            console.log(event.target.value);
            setTheme(event.target.value);
          }}
          className="select select-primary border-primary w-full max-w-xs"
        >
          <option disabled value="Select Theme">Select Theme</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="coffee">coffee</option>
          <option value="luxury">luxury</option>
          <option value="wireframe">wireframe</option>
          <option value="lemonade">lemonade</option>
          <option value="retro">retro</option>
          <option value="emerald">emerald</option>
          <option value="valentine">valentine</option>
          <option value="cyberpunk">cyberpunk</option>
          <option value="dim">dim</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
