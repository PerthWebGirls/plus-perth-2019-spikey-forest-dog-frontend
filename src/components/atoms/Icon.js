import React from 'react';

const Icon = ({simpIcon, iconDescription, ...props}) =>{
    return(
    <img src={simpIcon} alt={iconDescription} />
    );
}

export default Icon;