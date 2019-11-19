import React,{Component} from 'react';
import FormHeader from '../atoms/FormHeader'
import Logo from '../atoms/Logo'
import LinkIcon from '../atoms/LinkIcon'


const FormScreens = ({image,header, ...props}) => {
  return (
        <div className="form-screens">
            <LinkIcon link="/" icon="img/back-icon.png" iconname="Back arrow"/>
            <Logo src={image}/>
            <FormHeader header={header}/>
        </div>
    );
}

export default FormScreens;