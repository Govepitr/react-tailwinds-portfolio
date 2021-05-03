import React from 'react';
import RB from '../../assets/images/RB.gif';
import Horiseon from '../../assets/images/Horiseon.gif';
import FCB from '../../assets/images/FCB.gif';
import Cinema from '../../assets/images/cinemasearch.gif';
import MK1 from '../../assets/images/portfolioV1.gif';
import ComingSoon from '../../assets/images/comingsoon.gif';
import Pardon from '../../assets/images/pardon.gif';
import Who from '../../assets/images/who.gif';
import Shards from '../../assets/images/muchwow.gif';

function Project() {
  return (
    <section>
      <section id="work">
      <div className="body-title text-center marker mt-5 mb-5" data-color="67, 107, 131">
        <h2>My work</h2>
      </div>
      <div className="scene">
        <div className="track"><a className="item" href="#0">
            <div className="title"> </div></a><a className="item" href="#0">
            <div className="title">Run Buddy</div></a><img alt="Run Buddy" src={RB} /><a className="item" target="_blank" rel="noreferrer" href="https://govepitr.github.io/run-buddy/">
            <div className="title">Flash Card Buddy</div></a><img alt="FCB" src={FCB} /><a className="item" target="_blank" rel="noreferrer" href="https://flash-card-buddy.herokuapp.com/">
            <div className="title">Horiseon</div></a><img alt="Horiseon" src={Horiseon} /><a className="item" target="_blank" rel="noreferrer" href="https://govepitr.github.io/Horiseon/">
            <div className="title">Portfolio MK1</div></a><img alt="MK1" src={MK1} /><a className="item" target="_blank" rel="noreferrer" href="https://govepitr.github.io/">
            <div className="title">Cinema Search</div></a><img alt="Cinema Search" src={Cinema} /><a className="item" target="_blank" rel="noreferrer" href="https://govepitr.github.io/GroupProject1/">
            <div className="title"></div></a><img src={ComingSoon} alt="coming soon" /><a className="item" href="#0">
            <div className="title"></div></a><img src={Pardon} alt="pardon" /><a className="item" href="#0">
            <div className="title"></div></a><img src={Who} alt="who" /><a className="item" href="#0">
            <div className="title"></div></a><img src={Shards} alt="shards"/><a className="item" target="_blank" rel="noreferrer" href="https://www.thisworldthesedays.com/flowing-shards.html">
            <div className="title"></div></a></div>
      </div>
    </section>
    </section>
  );
}

export default Project;