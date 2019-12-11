import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkWrapper from '../molecules/NavLinkWrapper'
import PageTitle from '../atoms/PageTitle'
import Icon from '../atoms/Icon'
import HamburgerIcon from '../molecules/HamburgerIcon'




const NavigationList = ({simpIcon,title,text, ...props}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <HamburgerIcon />
            <PageTitle className="navbar-brand" title={title}/>
            <Icon simpIcon={simpIcon}/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
        <Link to="/"><NavLinkWrapper text="Home"/></Link>
        <Link to="/login"><NavLinkWrapper text="Login"/></Link>
        <Link to="/Pets"><NavLinkWrapper text="Pets"/></Link>
        <Link to="/aboutus"><NavLinkWrapper text="About Us"/></Link>
        <Link to="/register"><NavLinkWrapper text="Register"/></Link>
        <Link to="faqs"><NavLinkWrapper text="FAQ's"/></Link>

        
        
        
        
    </ul>
    </div>
    </nav>
    );
}

export default NavigationList;