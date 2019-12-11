import React from 'react'
import StandardPage from '../components/templates/StandardPage'
import FaqsText from '../components/templates/FaqsText'



const Faqs = (props) => {
    return ( 
      <>
    <StandardPage title="FAQ's"/>
    <FaqsText  
            heading='How do I choose a pet?'
            text='The first step in deciding if a dog, cat, rabbit, fish, bird, hamster, or guinea pig is the right pet for you involves asking yourself a series of questions, and this should be done long before you visit the shelter. "What is my lifestyle?"If you are rarely home, then choosing a dog that needs lots of attention and daily walks would not be a good idea.
             '/>
             </>
           );
      
}



export default Faqs