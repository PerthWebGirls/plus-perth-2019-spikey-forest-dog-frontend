import React from 'react';
import FilterText from '../molecules/FilterText'
import FilterButtons from '../molecules/FilterButtons'
import './FilterSection.css'


const FilterSection = ({simpIcon,link,petimage,onCatClick,onDogClick,onOtherClick,onAllClick, ...props}) => {
  return (
        <div className="filter-section">
            <FilterText text="filter" simpIcon={simpIcon}/>
            <FilterButtons onCatClick={onCatClick} onDogClick={onDogClick} onOtherClick={onOtherClick} onAllClick={onAllClick}/>
        </div>
    );
}

export default FilterSection;