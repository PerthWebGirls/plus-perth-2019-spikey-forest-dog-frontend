import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:``,
            email:``,
            password:``,
            confirmPassword:``
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
     fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
         name: this.setState.name,
         email: this.state.email,
         Password: this.state.password,
         confirmPassword: this.state.confirmPassword,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8'
       }
     })
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({ name: '',email: '', password: '', confirmPassword:''});
       })
       .catch(err => {
         console.log(err);
       });
   }
   render(){
       return(
        <form className="register-form">
        <FormField type="text" name="name" label="Name" value={this.state.name} onChange={this.handleChange}/>
        <FormField type="text" name="email" label="Email Address" value={this.state.email} onChange={this.handleChange}/>
        <FormField type="text" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/>
        <FormField type="text" name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}/>
        <Button>Register</Button>
        <Link to="/login">
        <TextLink>Already have an account? Login</TextLink>
        </Link>
    </form>
       );
   }
}

export default RegisterForm;
