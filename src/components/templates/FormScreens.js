import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../atoms/FormHeader';
import Logo from '../atoms/Logo';
import LinkIcon from '../atoms/LinkIcon';
import Arrow from '../../img/arrow.png';
import brand from '../../img/brand.png';
import './FormScreen.css';


const FormScreens = ({Brand,header, ...props}) => {
  return (
        <div className="form-screens">
            <Link to>
            <LinkIcon icon={Arrow} iconname="Back arrow"/>
            </Link>
            <div className="headings">
            <Logo brand={brand}/>
            <FormHeader header={header}/>
            </div>
        </div>
    );
}

export default FormScreens;