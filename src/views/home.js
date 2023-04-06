import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import buz from "../audio/bell.wav";

import NavigationLinks from "../components/navigation-links";
import Team from "../components/team";
import Countdown from "../components/countdown";
import "./home.css";
import initialData from "../libs/initialData";

const Home = () => {
  const [countdown, setCountdown] = useState(false);
  const [data, setData] = useState(initialData);
  let serial = 0;
  const buzz = new Audio(buz);

  useEffect(() => {
    window.addEventListener("keydown", function (event) {
      if (event.key === "q") {
        serial = serial + 1;
        select("1", serial);
      }
      if (event.key === "w") {
        serial = serial + 1;
        select("2", serial);
      }
      if (event.key === "e") {
        serial = serial + 1;
        select("3", serial);
      }
      if (event.key === "r") {
        serial = serial + 1;
        select("4", serial);
      }
      if (event.key === "t") {
        serial = serial + 1;
        select("5", serial);
      }
      if (event.key === "a") {
        clearSelect();
        serial = 0;
      }
      if (event.key === "z") {
        setCountdown((n) => (n = !n));
      }
    });
  }, []);

  const count = countdown ? (
    <Countdown rootClassName="countdown-root-class-name"></Countdown>
  ) : (
    ""
  );

  function select(id, serial) {
    const mydata = [...data];
    const getindex = mydata.findIndex((da) => da.id == id);
    if (mydata[getindex].select != true) {
      buzz.play();
      mydata[getindex].select = true;
      mydata[getindex].serial = serial;
      setData(mydata);
    }
  }

  function addPoint(id, point) {
    const mydata = [...data];
    const getindex = mydata.findIndex((da) => da.id == id);
    const nilaiawal = data[getindex].score;
    mydata[getindex].score = nilaiawal + point;
    setData(mydata);
  }

  function subPoint(id, point) {
    const mydata = [...data];
    const getindex = mydata.findIndex((da) => da.id == id);
    const nilaiawal = data[getindex].score;
    mydata[getindex].score = nilaiawal - point;
    setData(mydata);
  }

  function clearSelect() {
    const mydata = [...data];
    mydata.map((da) => {
      da.select = false;
    });
    mydata.map((da) => {
      da.serial = 0;
    });
    setData(mydata);
    serial = 0
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Ramadhan Quiz</title>
        <meta property="og:title" content="Tricky Qualified Trout" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <img
          alt="logo"
          src="/playground_assets/hsf1njj-cutout-crop-200h.png"
          className="home-image"
        />
        <div className="home-separator"></div>
        <nav className="home-nav">
          <h1 className="home-text">
            Ramadhan Quiz - Sanlat Ramadhan STP KU Bandung
          </h1>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <ListTeam
        data={data}
        onAdd={addPoint}
        onSub={subPoint}
        clear={clearSelect}
      />
      {count}
    </div>
  );
};

export function ListTeam({ data, onAdd, onSub }) {
  return (
    <div className="home-container1">
      {data.map((da) => (
        <Team
          key={da.id}
          team={da.team}
          score={da.score}
          onAdd={() => onAdd(da.id, 100)}
          onSub={() => onSub(da.id, 100)}
          select={da.select}
          serial={da.serial}
        />
      ))}
    </div>
  );
}

export default Home;
