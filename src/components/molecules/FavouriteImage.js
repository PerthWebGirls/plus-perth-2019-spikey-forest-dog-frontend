import React from 'react';
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'


const FavouriteImage = ({petImage, text,heading, ...props}) => {
  return (
        <div className="favourite-image" style={{ backgroundImage: `url(/img/${petImage}.jpg)` }}>
            <TextHeader>{heading}</TextHeader>
            <TextBox>{text}</TextBox>
        </div>
    );
}

export default FavouriteImage;