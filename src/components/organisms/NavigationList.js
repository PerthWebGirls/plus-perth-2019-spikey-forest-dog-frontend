import React from 'react';
import NavLinkWrapper from '../molecules/NavLinkWrapper'
import PageTitle from '../atoms/PageTitle'
import Icon from '../atoms/Icon'
import HamburgerIcon from '../molecules/HamburgerIcon'




const NavigationList = ({simpIcon,title,text, ...props}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <PageTitle className="navbar-brand" title={title}/>
            <HamburgerIcon />
            <Icon simpIcon={simpIcon}/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
        <NavLinkWrapper text="Home"/>
        <NavLinkWrapper text="Account"/>
        <NavLinkWrapper text="Pets"/>
        <NavLinkWrapper text="My Favourites"/>
        <NavLinkWrapper text="About Us"/>
        <NavLinkWrapper text="FAQ's"/>
    </ul>
    </div>
    </nav>
    );
}

export default NavigationList;