import React from 'react';
import StandardPage from '../components/templates/StandardPage';
import FooterBar from '../components/atoms/FooterBar'
import HeroImage from '../components/atoms/HeroImage'
import PetBio from '../components/organisms/PetBio'
import './Home.css';





const Pet6 = ({heading,title, ...props}) => {
  return (
      <div className="pet-page">
      <StandardPage title={title}/>
        <HeroImage />
        <PetBio />
      <FooterBar/>
      </div>
    );
}

export default Pet6;