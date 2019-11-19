import React from 'react';
import HeroImage from '../atom/HeroImage'
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'

const InfoContent = ({heading, text, ...props}) => {
  return (
        <div>
            <HeroImage/>
            <TextHeader>{heading}</TextHeader>
            <TextBox>{Text}</TextBox>
        </div>
    );
}

export default InfoContent;