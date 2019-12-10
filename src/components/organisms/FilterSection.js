import React from 'react';
import FilterText from '../molecules/FilterText'
import FilterButtons from '../molecules/FilterButtons'
import 'FilterSection.css'


const FilterSection = ({simpIcon,link,petimage, ...props}) => {
  return (
        <div className="filter-section">
            <FilterText text="filter" simpIcon={simpIcon}/>
            <FilterButtons/>
        </div>
    );
}

export default FilterSection;