import React from 'react';
import TextHeader from '../atoms/TextHeader'
import PetTrait from '../molecules/PetTrait'
import './Pet.css'


const Pet = ({petname,heading,text,petImage, ...props}) => {
  return (
    <div class="indi-pet col-6">
        <div className="single-pet-image">
            <TextHeader heading={heading}/>
        </div>
        <div className="Traits row">
            <PetTrait  heading="Breed" text={text}/>
            <PetTrait  heading="Sex" text={text}/>
            <PetTrait  heading="Age" text={text}/>
            <PetTrait  heading="Location" text={text}/>
        </div>
    </div>
    );
}

export default Pet;