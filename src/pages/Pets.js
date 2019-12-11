import React from 'react';
import StandardPage from '../components/templates/StandardPage';
import FooterBar from '../components/atoms/FooterBar'
import Pet from '../components/organisms/Pet'
import FilterSection from '../components/organisms/FilterSection'
import './Home.css';

const Pets = ({onCatClick,onDogClick,onOtherClick,onAllClick, ...props}) => {
  return (
      <div className="pet-page">
      <StandardPage title="Pets"/>
      <div className="page-content container-fluid">
     <FilterSection onCatClick={onCatClick} onDogClick={onDogClick} onOtherClick={onOtherClick} onAllClick={onAllClick}/>
     <div className="all-pets row" id="all-pets">
  
    </div>
    </div>
      <FooterBar/>
      </div>
    );
}

export default Pets;