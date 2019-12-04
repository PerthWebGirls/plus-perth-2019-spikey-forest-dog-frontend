import React from 'react';

const NavLink = props =>{
    return(
        <a className="nav-link">{props.children}</a>
    );
}

export default NavLink;