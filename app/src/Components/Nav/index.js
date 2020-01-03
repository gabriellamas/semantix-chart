import React from 'react';
import './style.css'
import { NavLink } from "react-router-dom";
import iconPageOne from '../../img/checkmarked-circle.png'
import iconPageTwo from '../../img/page-two-icon.png'


const Nav = () => {
  return (
    <nav className="nav">
        <h2>Semantix</h2>

        <ul>
            <li>
                <NavLink exact to='/' className="link-nav" activeClassName="active">
                  <img src={iconPageOne} alt='page 1'/>
                  <span>Page 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/page-two" className="link-nav" activeClassName="active">
                  <img src={iconPageTwo} alt='page 2'/>
                  <span>Page 2</span>
                </NavLink>
            </li>
          </ul>
    </nav>
  );
}

export default Nav;
