import React from 'react';
import { Menu, Transition } from "@headlessui/react";

function Nav() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand" href="https://govepitr.github.io/"></span>
          <div className="" id="">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pl-5">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#about-me">About Me</span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#work">Work</span>
              </li>
              <Menu>
                <Menu.Button>Links</Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "bg-gradient-to-r from-white via-green-400 to-blue-500"}`} href="https://github.com/Govepitr">GitHub</a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "bg-gradient-to-r from-white via-gray-500 to green-500"}`}
                        href="https://www.linkedin.com/in/dan-arbelo/">LinkedIn</a>
                    )}
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