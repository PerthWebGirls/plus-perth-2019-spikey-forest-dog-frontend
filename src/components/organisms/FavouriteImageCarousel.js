import React from 'react';
import HomeContentHeader from '../molecules/HomeContentHeader'
import FavouriteImage from '../molecules/FavouriteImage'


const FavouriteImageCarousel = ({heading,link, ...props}) => {
  return (
        <div className="home-section">
          <HomeContentHeader heading="Popular Pets" href={link} text="See All Pets" src={simpIcon}/>
          <div className="carousel">
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          </div>
        </div>
    );
}

export default FavouriteImageCarousel;