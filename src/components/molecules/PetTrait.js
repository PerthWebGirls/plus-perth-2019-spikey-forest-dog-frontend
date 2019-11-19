import React from 'react';
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'


const PetTrait = ({heading, ...props}) => {
  return (
        <div className="pet-trait">
            <TextHeader>{heading}</TextHeader>
            <TextBox>{text}</TextBox>
        </div>
    );
}

export default PetTrait;