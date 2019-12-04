import React from 'react';
import Icon from '../atoms/Icon'
import PageTitle from '../atoms/PageTitle'
import NavigationList from '../organisms/NavigationList'
import HamburgerIcon from '../molecules/HamburgerIcon'

const Header = ({title, simpIcon, ...props}) => {
  return (
        <div className="header">
            <PageTitle className="navbar-brand">{title}</PageTitle>
            <HamburgerIcon />
            <Icon simpIcon={simpIcon}/>

        </div>
    );
}

export default Header;