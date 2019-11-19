import React from 'react';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'




const RegisterForm = (props) => {
  return (
        <form className="register-form">
            <FormField type="text" name="name" label="Name"/>
            <FormField type="text" name="email" label="Email Address"/>
            <FormField type="text" name="password" label="Password"/>
            <FormField type="text" name="confirm password" label="Confirm Password"/>
            <Button>Register</Button>
            <TextLink link="/">Already have an account? Login</TextLink>
        </form>
    );
}

export default RegisterForm;