import React from 'react';
import Button from '../atoms/Button'
import './FilterButtons.css'


const FilterButtons = ({text, onCatClick,onDogClick,onOtherClick,onAllClick, ...props}) => {
  return (
        <div className="filter-button">
            <Button onButtonClick={onAllClick}>All</Button>
            <Button onButtonClick={onCatClick}>Cats</Button>
            <Button onButtonClick={onDogClick}>Dogs</Button>
            <Button onButtonClick={onOtherClick}>Other</Button>
        </div>
    );
}

export default FilterButtons;