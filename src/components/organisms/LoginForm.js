import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:``,
            password:``,
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
         email: this.state.email,
         Password: this.state.password,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8'
       }
     })
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({ email: '', password: ''});
       })
       .catch(err => {
         console.log(err);
       });
   }
   render(){
       return(
        <form className="login-form" onSubmit={this.handleSubmit}>
        <FormField type="text" name="email" label="Email Address" value={this.state.email} onChange={this.handleChange}/>
        <FormField type="text" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/>
        <Button>Login</Button>
        <Link to="/register">
        <TextLink>Don't have an account? Register</TextLink>
        </Link>
    </form>
       );
   }
}

export default LoginForm;