import React from 'react';
import NavigationList from '../organisms/NavigationList'
import { FaSearch } from "react-icons/fa";


const StandardPage = ({title ,simpIcon,...props}) => {
  return (
        <>
            <NavigationList title={title} simpIcon={<FaSearch/>}/>
           
        </>
    );
}

export default StandardPage;