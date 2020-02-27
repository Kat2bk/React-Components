import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function Main() {
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {/* <div className="home__score">{homescore}</div> */}
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            {/* <div className="away__score">{awayscore}</div> */}
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons = {props}/>
      </section>
    </div>
  );
}

export default Main;
