import React from 'react';
import HeroImage from '../atoms/HeroImage'
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'

const InfoContent = ({heading, text, ...props}) => {

  return (  <div>           
            <HeroImage/>
            <div className='Header'>
            <TextHeader heading={heading}/>
            </div>
          <div className="text">
            <TextBox text={text}/>
           </div>
           </div>
    );
}

export default InfoContent;