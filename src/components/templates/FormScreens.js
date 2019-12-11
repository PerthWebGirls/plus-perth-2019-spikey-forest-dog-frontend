import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../atoms/FormHeader';
import Logo from '../atoms/Logo';
import LinkIcon from '../atoms/LinkIcon';
import brand from '../../img/brand.png';
import { FaChevronLeft } from "react-icons/fa";
import './FormScreen.css';


const FormScreens = ({Brand,header, ...props}) => {
  return (
        <div className="form-screens">
            <Link to="/">
            <LinkIcon icon={<FaChevronLeft/>}/>
            </Link>
            <div className="headings">
            <Logo brand={brand}/>
            <FormHeader header={header}/>
            </div>
        </div>
    );
}

export default FormScreens;    