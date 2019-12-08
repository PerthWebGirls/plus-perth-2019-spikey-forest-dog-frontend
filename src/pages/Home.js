import React from 'react';
import StandardPage from '../components/templates/StandardPage';
import FooterBar from '../components/atoms/FooterBar'
import HeroImage from '../components/atoms/HeroImage';
import FavouriteImageCarousel from '../components/organisms/FavouriteImageCarousel';
import FeaturedContent from '../components/organisms/FeaturedContent'
import './Home.css';

const Home = (props) => {
  return (
      <>
      <StandardPage title="Home"/>
      <div className="home-content">
      <HeroImage/>
      <div className="text-content">
      <FavouriteImageCarousel />
      <FeaturedContent />
      </div>
      </div>
      <FooterBar/>
      </>
    );
}

export default Home;