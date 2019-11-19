import React from 'react';
import TextBox from '../atoms/TextBox'
import AllPetTraits from '../molecules/AllPetTraits'
import PetTraitList from '../molecules/PetTraitList';


const PetBio = ({petname,heading,text,petImage, ...props}) => {
  return (
    <div>
            <AllPetTraits text={text}/>
            <PetTraitList heading={heading} text={text}/>
            <TextBox>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</TextBox>
            
    </div>
    );
}

export default PetBio;