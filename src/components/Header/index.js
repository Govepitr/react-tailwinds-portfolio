import React from 'react';
import AllMight from '../../../src/assets/images/Victory_1.svg';

function Header() {
  return (
    <section>
      <div>
        <hero className="All-might">
          <div className="text-right hero-text marker w-1/5 h-1/5" data-color="234, 225, 210">
            <img className="justify-center" src={AllMight} alt="Pillar" />
            <h3 className="heroic">I code, therefore I am..</h3>
          </div>
        </hero>
      </div>
    </section >
  );
}

export default Header;