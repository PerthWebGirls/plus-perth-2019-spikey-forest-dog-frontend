import React from 'react';
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'


const PetTraitList = ({heading,text, ...props}) => {
  return (
        <div className="pet-trait-list">
            <TextHeader>{heading}</TextHeader>
            <ul>
                <li><TextBox>{text}</TextBox></li>
                <li><TextBox>{text}</TextBox></li>
                <li><TextBox>{text}</TextBox></li>
                <li><TextBox>{text}</TextBox></li>
            </ul>
        </div>
    );
}

export default PetTraitList;