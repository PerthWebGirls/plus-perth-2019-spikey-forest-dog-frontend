import React from 'react';
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'


const PetTrait = ({heading,text, ...props}) => {
  return (
        <div className="pet-trait col-6">
            <TextHeader heading={heading}/>
            <TextBox text={text}/>
        </div>
    );
}

export default PetTrait;