import React from 'react';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'


const LoginForm = (props) => {
  return (
        <form className="login-form">
            <FormField type="text" name="email" label="Email Address"/>
            <FormField type="text" name="Password" label="Password"/>
            <Button>Login</Button>
            <TextLink link="/">Don't have an account? Register</TextLink>
        </form>
    );
}

export default LoginForm;