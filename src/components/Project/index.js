import React from 'react';
import RB from '../../assets/images/RB.gif';
import Horiseon from '../../assets/images/Horiseon.gif';
import FCB from '../../assets/images/FCB.gif';
import Cinema from '../../assets/images/cinemasearch.gif';
import MK1 from '../../assets/images/portfolioV1.gif';
import ComingSoon from '../../assets/images/comingsoon.gif';

function Project() {
  return (
    <section>
      <section id="work">
      <div className="body-title text-center marker mt-5 mb-5" data-color="67, 107, 131">
        <h2>My work</h2>
      </div>
      <div id="carouselControls" className="carousel slide mx-auto" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" id="run-buddy">
            <span target="_blank" href="https://govepitr.github.io/run-buddy/">
              <img alt="Run Buddy" src={RB} />
            </span>
          </div>
          <div className="carousel-item" id="flash-card">
            <span target="_blank" href="https://flash-card-buddy.herokuapp.com/">
              <img alt="FCB" src={FCB.gif} />
            </span>
          </div>
          <div className="carousel-item" id="horiseon">
            <span target="_blank" href="https://govepitr.github.io/Horiseon/">
              <img alt="Horiseon" src={Horiseon} />
            </span>
          </div>
          <div className="carousel-item" id="MK1">
            <span target="_blank" href="https://govepitr.github.io/">
              <img alt="MK1" src={MK1} />
            </span>
          </div>
          <div className="carousel-item" id="cinemasearch">
            <span target="_blank" href="https://govepitr.github.io/GroupProject1/">
              <img alt="Cinema Search" src={Cinema} />
            </span>
          </div>
          <div className="carousel-item" id="comingsoon">
            <img src={ComingSoon} alt="coming soon" />
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    </section>
  );
}

export default Project;