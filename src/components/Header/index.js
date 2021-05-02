import React from 'react';
import AllMight from '../../../src/assets/images/AMV.svg';

function Header() {
  return (
    <section>
      <div>
        <hero>
          <div className="text-right hero-text marker" data-color="234, 225, 210">
            <img src={AllMight} alt="Pillar" />
            <h3 className="heroic">I code, therefore I am..</h3>
          </div>
        </hero>
      </div>
    </section >
  );
}

export default Header;