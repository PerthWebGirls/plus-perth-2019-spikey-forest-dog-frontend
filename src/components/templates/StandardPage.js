import React from 'react';
import Header from '../molecules/Header'
import FooterBar from '../atoms/FooterBar'
import NavigationList from '../organisms/NavigationList'


const StandardPage = ({title ,simpIcon,...props}) => {
  return (
        <>
            <NavigationList title={title} simpIcon={simpIcon}/>
            <FooterBar/>
        </>
    );
}

export default StandardPage;