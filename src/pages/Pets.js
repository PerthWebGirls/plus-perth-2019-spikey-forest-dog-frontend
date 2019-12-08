import React from 'react';
import StandardPage from '../components/templates/StandardPage';
import FooterBar from '../components/atoms/FooterBar'
import Pet from '../components/organisms/Pet'
import FilterSection from '../components/organisms/FilterSection'
import './Home.css';

const Pets = (props) => {
  return (
      <div className="pet-page">
      <StandardPage title="Pets"/>
    <div className="page-content container-fluid">
    <FilterSection/>
    <div className="all-pets row">
    <Pet className="mr-2" heading="Snoopy col"/>
    <Pet heading="Dooby col"/>
    <Pet heading="Dabba col"/>
    <Pet heading="Nabba col"/>
    </div>
    </div>
      <FooterBar/>
      </div>
    );
}

export default Pets;