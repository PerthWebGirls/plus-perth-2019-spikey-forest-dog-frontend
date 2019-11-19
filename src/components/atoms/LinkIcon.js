import React from 'react';

const LinkIcon = ({icon,iconname, link, ...props}) =>{
    return(
    <a href={link}><img src={icon} alt={iconname} /></a>
    );
}

export default LinkIcon;