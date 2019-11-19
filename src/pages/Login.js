import React from 'react';
import FormScreens from '../components/templates/FormScreens'
import LoginForm from '../components/organisms/LoginForm'

const Login = (props) => {
  return (
      <div>
        <FormScreens header ="Login"/>
        <LoginForm />
    </div>
    );
}

export default Login;