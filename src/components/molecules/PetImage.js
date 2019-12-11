import React from 'react';
// import Image from '../atoms/Image'
import { Link } from 'react-router-dom';
import LinkIcon from '../atoms/LinkIcon'
import TextHeader from '../atoms/TextHeader'
import Icon from '../atoms/Icon'


const PetImage = ({heading,simpIcon, link, icon, iconname, ...props}) => {
  return (
        <div className="pet-image">
            <Link to="">
            <LinkIcon icon={icon} iconname={iconname}></LinkIcon>
            </Link>
            <TextHeader>{heading}</TextHeader>
            <TextHeader>{heading}</TextHeader>
            <Icon src={simpIcon}/>
        </div>
    );
}

export default PetImage;