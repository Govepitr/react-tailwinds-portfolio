import React from 'react';
import AllMight from '../../../src/assets/images/Victory_1.svg';

function Header() {
  return (
    <section>
      <div id="topContainer">
        <div className="All-might">
          <div className="hero-text marker w-2/5 h-2/5 mx-auto" data-color="234, 225, 210">
            <img className="w-1/2 h-1/2 mx-auto" src={AllMight} alt="Pillar" />
          </div>
            <span id="heroic" className="relative bottom-0 right-0" >I code, therefore I am..</span>
        </div>
      </div>
    </section >
  );
}

export default Header;