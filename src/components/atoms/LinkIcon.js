import React from 'react';

const LinkIcon = ({icon,iconname, ...props}) =>{
    return(
    
    <img src={icon} alt={iconname}/>
   
    );
}

export default LinkIcon;