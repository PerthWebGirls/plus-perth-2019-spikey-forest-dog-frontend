import React from 'react';
import Header from '../molecules/Header'
import FooterBar from '../atoms/FooterBar'
import NavigationList from '../organisms/NavigationList'


const StandardPage = (props) => {
  return (
        <>
            <NavigationList/>
            <FooterBar/>
        </>
    );
}

export default StandardPage;