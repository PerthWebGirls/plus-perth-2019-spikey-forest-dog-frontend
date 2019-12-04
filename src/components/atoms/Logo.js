import React from 'react'
import brand from '../../img/brand.png'

const Logo = ({brand, ...props}) =>{
    return <img src={brand} alt="Logo" />;
    

};

export default Logo;