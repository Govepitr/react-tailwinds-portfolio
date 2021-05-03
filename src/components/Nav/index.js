import React from 'react';

function Nav() {
  return (
    <>
      
        <nav classNameName="navbar navbar-expand-lg navbar-light">
          <div classNameName="container-fluid">
            <span classNameName="navbar-brand" href="https://govepitr.github.io/"></span>
            <button classNameName="navbar-toggler" type="button">
              <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pl-5">
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page" href="#about-me">About Me</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page" href="#work">Work</span>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" href="#links" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Links
            </span>
                  <ul id="navMenu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <span className="dropdown-item" title="Github" target="_blank" href="https://github.com/Govepitr"><i
                        className="fa fa-github fa-2x "></i></span>
                    </li>
                    <li>
                      <span className="dropdown-item" title="LinkedIn" target="_blank"
                        href="https://www.linkedin.com/in/dan-arbelo/"><i className="fa fa-linkedin fa-2x"></i></span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul>
              <li classNameName="nav-item">
                <span classNameName="nav-link active" aria-current="page" href="#about-me">About Me</span>
              </li>
              <li classNameName="nav-item">
                <span classNameName="nav-link active" aria-current="page" href="#work">Work</span>
              </li>
              <li classNameName="nav-item dropdown">
                <span classNameName="nav-link" href="#links" role="button">
                  Links
                </span>
                <ul id="navMenu" classNameName="dropdown-menu">
                  <li>
                    <span classNameName="dropdown-item" title="Github" href="https://github.com/Govepitr"></span>
                  </li>
                  <li>
                    <span classNameName="dropdown-item" title="LinkedIn" href="https://www.linkedin.com/in/dan-arbelo/"></span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      
    </>
  );
}

export default Nav;