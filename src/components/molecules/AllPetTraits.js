import React from 'react';
import PetTrait from '../molecules/PetTrait'


const AllPetTraits = ({heading, text, ...props}) => {
  return (
        <div className="all-pet-traits">
            <PetTrait heading="Breed" text={text} />
            <PetTrait heading="Sex" text={text} />
            <PetTrait heading="Location" text={text} />
            <PetTrait heading="Cost" text={text} />
        </div>
    );
}

export default AllPetTraits;