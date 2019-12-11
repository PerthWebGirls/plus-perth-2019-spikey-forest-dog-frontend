import React from 'react';
import HeroImage from '../atoms/HeroImage'
import TextHeader from '../atoms/TextHeader'
import TextBox from '../atoms/TextBox'

const FaqsText = ({heading, text, ...props}) => {

    return (  <div>           
              <HeroImage/>
              <div className='Header'>
              <TextHeader heading={heading}/>
              </div>
            <div className="text">
              <TextBox text={text}/>
             </div>
             <div>
             <div className='Header'>
             <heading>Where should I get my pet?</heading> </div> </div>
             <div className="text">
            <text>
            Even though there are many wonderful dogs waiting in shelters for someone to adopt them, breeders and pet stores continue to produce and sell animals just to make money. For every dog bought from a pet store or breeder, a dog in a shelter has to be put to sleep. So definetly consider sheleters.
            </text>
            </div>
            <div className='Header'>
                <heading>
                     When is the right time to adopt?
                </heading>
            </div>
            <div className='text'>
                <text>With all of the adorable “fur babies” in need of homes, you might be tempted to make a snap decision. However, it will be better for your future furry BFF if you put a lot of thought into it. For example, do you live in an apartment, or a house with a yard? Does your family travel a lot? Who will be there to let your dog out when you’re not home? Do your siblings want a new dog as much as you do?
</text>
            </div>
      

             </div>
      );
  }

export default FaqsText 