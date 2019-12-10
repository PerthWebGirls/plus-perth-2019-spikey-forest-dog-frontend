import React from 'react';
import Button from '../atoms/Button'
import './FilterButtons.css'


const FilterButtons = ({text, ...props}) => {
  return (
        <div className="filter-button">
            <Button>Cats</Button>
            <Button>Dogs</Button>
            <Button>Other</Button>
        </div>
    );
}

export default FilterButtons;