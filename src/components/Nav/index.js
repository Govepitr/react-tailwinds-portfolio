import React from 'react';

function Nav() {
  return (
    <section>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand" href="https://govepitr.github.io/"></span>
          <button className="" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse">
            <ul>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#about-me">About Me</span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#work">Work</span>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link" href="#links" role="button">
                  Links
                </span>
                <ul id="navMenu" className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" title="Github" href="https://github.com/Govepitr"></span>
                  </li>
                  <li>
                    <span className="dropdown-item" title="LinkedIn" href="https://www.linkedin.com/in/dan-arbelo/"></span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Nav;