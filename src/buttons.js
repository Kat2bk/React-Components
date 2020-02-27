import React, { useState } from "react";
import Main from "./main";
import "./App.css";

function Buttons(props) {
  const [homescore, setHome] = useState(0);
  const [awayscore, setAway] = useState(0);

  return (
    <div>
      <div className="homeButtons">
        <button
          onClick={e => {
            setHome(homescore + 7);
          }}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={e => {
            setHome(homescore + 3);
          }}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={e => {
            setAway(awayscore + 7);
          }}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={e => {
            setAway(awayscore + 3);
          }}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </div>
  );
}

export default Buttons;
