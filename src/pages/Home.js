import React from 'react';
import StandardPage from '../components/templates/StandardPage'
import { FaSearch } from "react-icons/fa";

const Login = (props) => {
  return (
      <StandardPage title="Home" simpIcon={<FaSearch/>}/>
    );
}

export default Login;