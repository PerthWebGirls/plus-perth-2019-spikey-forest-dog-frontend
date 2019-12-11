import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name:``,
            last_name:``,
            username:``,
            email:``,
            // password:``
            // confirmPassword:``
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]:value
        });
}
handleSubmit(event) {
     event.preventDefault();
     this.setState({alert:true})
     const first_name = this.state.first_name;
     const last_name = this.state.last_name;
     const email = this.state.email;
     const username = this.state.username;
    //  const password = this.state.password;
     fetch('http://petter-api.herokuapp.com/users/', {
       method: 'POST',
       body: JSON.stringify({
         first_name,
         last_name,
         username,
         email,
        //  password,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8'
       }
     })
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({ first_name: '',last_name: '', email: '', username: ''});
       })
       .catch(err => {
         console.log(err);
       });
   }
   render(){
       return(
        <form  method="POST" className="register-form" onSubmit={this.handleSubmit}>
        <FormField type="text" name="first_name" label="First Name" value={this.state.first_name} onChange={this.handleChange}/>
        <FormField type="text" name="last_name" label="Last Name" value={this.state.last_name} onChange={this.handleChange}/>
        <FormField type="text" name="email" label="Email Address" value={this.state.email} onChange={this.handleChange}/>
        <FormField type="text" name="username" label="Username" value={this.state.username} onChange={this.handleChange}/>
        {/* <FormField type="text" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/> */}
        {/* <FormField type="text" name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}/> */}
        <Button type="submit">Register</Button>
        <Link to="/login">
        <TextLink>Already have an account? Login</TextLink>
        </Link>
    </form>
       );
   }
}

export default RegisterForm;
