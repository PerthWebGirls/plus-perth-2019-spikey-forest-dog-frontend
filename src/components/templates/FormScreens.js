import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../atoms/FormHeader'
import Logo from '../atoms/Logo'
import LinkIcon from '../atoms/LinkIcon'


const FormScreens = ({image,header, ...props}) => {
  return (
        <div className="form-screens">
            <Link to>
            <LinkIcon icon="img/back-icon.png" iconname="Back arrow"/>
            </Link>
            <Logo src={image}/>
            <FormHeader header={header}/>
        </div>
    );
}

export default FormScreens;