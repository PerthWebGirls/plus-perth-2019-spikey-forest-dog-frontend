import React from 'react';
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'
import './FavouriteImage.css'


const FavouriteImage = ({petImage, text,heading, ...props}) => {
  return (
        <div className="favourite-image">
            <TextHeader>{heading}</TextHeader>
            <TextBox>{text}</TextBox>
        </div>
    );
}

export default FavouriteImage;