import React from 'react';
// import Image from '../atoms/Image'
import LinkIcon from '../atoms/LinkIcon'
import TextHeader from '../atoms/TextHeader'
import Icon from '../atoms/Icon'


const PetImage = ({heading,simpIcon, link, icon, iconname, ...props}) => {
  return (
        <div className="pet-image" style={{ backgroundImage: `url(/img/${petImage}.jpg)` }}>
            <LinkIcon href={link} src={icon} alt={iconname}></LinkIcon>
            <TextHeader>{heading}</TextHeader>
            <TextHeader>{heading}</TextHeader>
            <Icon src={simpIcon}/>
        </div>
    );
}

export default PetImage;