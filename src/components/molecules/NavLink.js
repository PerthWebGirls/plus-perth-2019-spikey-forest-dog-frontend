import React from 'react';
import Icon from '../atoms/Icon'
import TextBox from '../atoms/TextBox'


const Navlink = ({heading, text, ...props}) => {
  return (
        <div className="nav-item">
            <Icon src={simpIcon}/>
            <TextBox>{text}</TextBox>
        </div>
    );
}

export default Navlink;