import React from 'react';
import { Link } from 'react-router-dom';
import HomeContentHeader from '../molecules/HomeContentHeader';
import FavouriteImage from '../molecules/FavouriteImage';
import TextLink from '../atoms/TextLink';
import './FavouriteImageCarousel.css'



const FavouriteImageCarousel = ({heading,link,simpIcon, text, ...props}) => {
  return (
        <div className="home-section">
          <HomeContentHeader 
          heading="Popular Pets" 
          simpIcon={simpIcon}/>
          <Link to="/pets"><TextLink>See All Pets</TextLink></Link> 
          <div className="carousel" id="carousel">
          {/* <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} />
          <FavouriteImage heading={heading} text={text} /> */}
          </div>
        </div>
    );
}

export default FavouriteImageCarousel;