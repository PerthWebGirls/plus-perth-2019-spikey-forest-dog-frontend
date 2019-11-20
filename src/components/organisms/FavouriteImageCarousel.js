import React from 'react';
import { Link } from 'react-router-dom';
import HomeContentHeader from '../molecules/HomeContentHeader'
import FavouriteImage from '../molecules/FavouriteImage'



const FavouriteImageCarousel = ({heading,link, ...props}) => {
  return (
        <div className="home-section">
          <HomeContentHeader 
          heading="Popular Pets" 
          src={simpIcon}/>
          <div className="carousel">
          <Link to="/"><TextLink>See All Pets</TextLink></Link> 
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          </div>
        </div>
    );
}

export default FavouriteImageCarousel;