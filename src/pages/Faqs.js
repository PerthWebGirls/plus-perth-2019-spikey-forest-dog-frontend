import React from 'react'
import StandardPage from '../components/templates/StandardPage'
import FaqsText from '../components/templates/FaqsText'



const Faqs = (props) => {
    return ( 
      <>
    <StandardPage title="FAQ's"/>
    <FaqsText  
            heading='Frequently Asked Questions...'
             />
             </>
           );
      
}



export default Faqs