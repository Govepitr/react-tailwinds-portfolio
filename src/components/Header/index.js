import React from 'react';
import AllMight from '../../../src/assets/images/Victory_1.svg';

function Header() {
  return (
    <section>
      <div className="w-1/2 h-1/2 mx-auto">
        <hero className="All-might">
          <div className="text-right hero-text marker w-2/5 h-2/5 mx-auto" data-color="234, 225, 210">
            <img className="" src={AllMight} alt="Pillar" />
            <h3 className="heroic">I code, therefore I am..</h3>
          </div>
        </hero>
      </div>
    </section >
  );
}

export default Header;