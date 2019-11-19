import React from 'react';

const Logo = ({image, ...props}) =>{
    return(
    <img src={image} alt="Logo" />
    );
}

export default Logo;