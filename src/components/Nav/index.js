import React from 'react';
import { Menu } from "@headlessui/react";

function Nav() {
  return (
      
    
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span id="myName" className="navbar-brand" href="https://govepitr.github.io/"></span>
          <div className="" id="">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pl-5">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#about">About Me</span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#work">Work</span>
              </li>
              <Menu>
                <Menu.Button>Links</Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                      <a className="" href="https://github.com/Govepitr" target="_blank" rel="noreferrer">GitHub</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="" href="https://www.linkedin.com/in/dan-arbelo/" target="_blank" rel="noreferrer">LinkedIn</a>                    
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Nav;