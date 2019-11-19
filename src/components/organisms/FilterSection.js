import React from 'react';
import FilterText from '../molecules/FilterText'
import FilterButtons from '../molecules/FilterButtons'


const FilterSection = ({simpIcon,link,petimage, ...props}) => {
  return (
        <div className="filter-section">
            <FilterText text="filter" src={simpIcon}/>
            <FilterButtons/>
        </div>
    );
}

export default FilterSection;