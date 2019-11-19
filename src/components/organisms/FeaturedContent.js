import React from 'react';
import HomeContentHeader from '../molecules/HomeContentHeader'
import Image from '../atoms/Image'
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'
import TextLink from '../atoms/TextLink'


const FeaturedContent = ({heading,link,petimage, ...props}) => {
  return (
        <div className="home-section">
          <HomeContentHeader heading="Featured" link={link} text="See All" src={simpIcon}/>
          <div className="carousel">
          <Image src={petimage} />
          <TextHeader>About Us</TextHeader>
          <TextBox>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</TextBox>
          <TextLink link={link}>Continue Reading</TextLink>
          </div>
        </div>
    );
}

export default FeaturedContent;