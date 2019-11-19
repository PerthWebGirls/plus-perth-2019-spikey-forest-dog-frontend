import React from 'react';
import TextHeader from '../atoms/TextHeader'
import PetTrait from '../molecules/PetTrait'


const Pet = ({petname,heading,text,petImage, ...props}) => {
  return (
    <div>
        <div className="single-pet-image" style={{ backgroundImage: `url(/img/${petImage}.jpg)` }}>
            <TextHeader>{petname}</TextHeader>
        </div>
        <div className="Traits">
            <PetTrait heading={heading} text={text}/>
            <PetTrait heading={heading} text={text}/>
            <PetTrait heading={heading} text={text}/>
            <PetTrait heading={heading} text={text}/>
        </div>
    </div>
    );
}

export default Pet;