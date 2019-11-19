import React from 'react';
import FormScreens from '../components/templates/FormScreens'
import RegisterForm from '../components/organisms/RegisterForm'

const Login = (props) => {
  return (
      <div>
        <FormScreens header ="Register"/>
        <RegisterForm />
    </div>
    );
}

export default Login;