import React from 'react';

const TextLink = ({link, ...props}) =>{
    return(
    <a href={link}>{props.children}</a>
    );
}

export default TextLink;