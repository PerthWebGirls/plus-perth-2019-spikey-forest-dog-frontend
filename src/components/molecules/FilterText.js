import React from 'react';
import Icon from '../atoms/Icon'
import TextLink from '../atoms/TextLink'


const FilterText = ({simpIcon, text, ...props}) => {
  return (
        <div className="filter">
            <Icon simpIcon={simpIcon}/>
            {/* <Link> */}
            <TextLink>Filter</TextLink>
            {/* </Link> */}
            
        </div>
    );
}

export default FilterText;