import React from 'react';

const Image = ({petimage, ...props}) =>{
    return(
    <img src={petimage} alt="pet" />
    );
}

export default Image;