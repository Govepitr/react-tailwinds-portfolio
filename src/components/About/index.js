import React from 'react';
import MeAbove from '../../assets/images/smolder.jpg';
import MeUnder from '../../assets/images/mesmol.jpg';

function About() {
  return (
    <section id="about-me" className=" marker mt-5" data-color="165, 155, 145">
      <figure className="justify-content-center" id="biopic">
        <div className="text-center">
          <h2 id="aboutMe">About Me</h2>
          <img src={MeUnder} className="bottom rounded" alt="Bio Pic" />
          <img src={MeAbove} className="top rounded" alt="Bio Pic" />
        </div>
      </figure>
      <div className="text-end marker mt-5" data-color="110, 178, 159">
        <p>
          Hi! My name is <span className="email" id="dan">Dan Arbelo</span>. I am a Full-Stack Web developer. One of the things I have realized in so many professional environments is that "less is more".
          That is something that is even more consistent in coding. Whether it's simple HTML/CSS, JavaScript, Handlebars.js, and even within the MERN stack itself!
          One of the things I have always prided myself on is not only taking the time to fully understand what tools I have to work with, but more importantly what is the most efficient way to
          apply them!<br/>
            I have developed a fairly deep love for designing a user experience that is not overwhelming to a new-comer, but is also memorable to a those who have seen a few things.
        </p>
      </div>
    </section>
    
  );
}

export default About;