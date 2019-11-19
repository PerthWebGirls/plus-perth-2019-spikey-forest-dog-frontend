import React from 'react';

const HeroImage = ({hero, ...props}) =>{
    return(
    <img src={hero} alt="pet-background" />
    );
}

export default HeroImage;