import React from 'react';
import NavLink from '../atoms/NavLink'



const NavlinkWrapper = ({heading, text, ...props}) => {
  return (
        <li className="nav-item">
            <NavLink text={text}/>
        </li>
    );
}

export default NavlinkWrapper;