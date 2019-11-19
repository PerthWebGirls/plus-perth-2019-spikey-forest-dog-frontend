import React from 'react';
import Icon from '../atoms/Icon'
import PageTitle from '../atoms/PageTitle'

const Header = ({title, label, ...props}) => {
  return (
        <div className="header">
            <Icon src={simpIcon}/>
            <PageTitle>{title}</PageTitle>
            <Icon src={simpIcon}/>

        </div>
    );
}

export default Header;