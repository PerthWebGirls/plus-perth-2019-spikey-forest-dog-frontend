import React from 'react';
import HomeContentHeader from '../molecules/HomeContentHeader'
import Image from '../atoms/Image'
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'
import TextLink from '../atoms/TextLink'
import Images from '../../img/cat-sleeping.jpg'


const FeaturedContent = ({heading,link,petimage,simpIcon,text, ...props}) => {
  return (
        <div className="home-section">
          <HomeContentHeader heading="Featured" link={link} text="See All" simpIcon={simpIcon}/>
          <div className="featured">
          <Image petimage={Images} />
          <div className="featuredText">
          <TextHeader heading="About Us"/>
          <TextBox text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
          </div>
          </div>
          <TextLink link={link}>Continue Reading</TextLink>
        </div>
    );
}

export default FeaturedContent;