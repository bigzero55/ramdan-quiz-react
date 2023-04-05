import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import buz from "../audio/buzz.wav";

import NavigationLinks from "../components/navigation-links";
import Team from "../components/team";
import Countdown from "../components/countdown";
import "./home.css";

let initialData = [
  {
    id: "1",
    team: "sdfsd",
    score: 0,
    select: false,
  },
  {
    id: "2",
    team: "sdf",
    score: 0,
    select: false,
  },
  {
    id: "3",
    team: "sdfr",
    score: 0,
    select: false,
  },
  {
    id: "4",
    team: "asar",
    score: 0,
    select: false,
  },
  {
    id: "5",
    team: "asd",
    score: 0,
    select: false,
  },
];

const Home = () => {
  const [countdown, setCountdown] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const buzz = new Audio(buz);
    document.addEventListener("keydown", function (event) {
      if (event.key === "d") {
        buzz.play();
        console.log("huruf d");
      }
    });
  }, []);

  const count = countdown ? (
    <Countdown rootClassName="countdown-root-class-name"></Countdown>
  ) : (
    ""
  );

  function addPoint(id, point) {
    const mydata = [...data]
    const getindex = mydata.findIndex((da) => (da.id == id));
    const nilaiawal = data[getindex].score
    mydata[getindex].score = nilaiawal + point
    setData(mydata);
  }

   function subPoint(id, point) {
     const mydata = [...data];
     const getindex = mydata.findIndex((da) => da.id == id);
     const nilaiawal = data[getindex].score;
     mydata[getindex].score = nilaiawal - point;
     setData(mydata);
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
      <ListTeam data={data} onAdd={addPoint}onSub={subPoint}/>
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
        />
      ))}
    </div>
  );
}

export default Home;