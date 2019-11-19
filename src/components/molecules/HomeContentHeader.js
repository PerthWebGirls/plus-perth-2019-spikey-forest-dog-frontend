import React from 'react';
import ContentHeading from '../atoms/ContentHeading'
import TextLink from '../atoms/TextLink'
import Icon from '../atoms/Icon'


const HomeContentHeader = ({heading, link, text, simpIcon, ...props}) => {
  return (
        <div className="home-header">
            <ContentHeading>{heading}</ContentHeading>
            <TextLink href={link}>{text}</TextLink>
            <Icon src={simpIcon}/>
        </div>
    );
}

export default HomeContentHeader;