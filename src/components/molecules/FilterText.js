import React from 'react';
import Icon from '../atoms/Icon'
import TextLink from '../atoms/TextLink'


const FilterText = ({simpIcon, text,link, ...props}) => {
  return (
        <div className="filter">
            <Icon src={simpIcon}/>
            <Link to>
            <TextLink>Filter</TextLink>
            </Link>
            
        </div>
    );
}

export default FilterText;