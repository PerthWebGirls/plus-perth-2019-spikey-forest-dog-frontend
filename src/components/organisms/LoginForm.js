import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../molecules/FormField'
import Button from '../atoms/Button'
import TextLink from '../atoms/TextLink'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
     this.setState({alert:true})
    const username = this.state.username;
    const password = this.state.password;
    fetch(' http://petter-api.herokuapp.com/api/token/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ username: '', password: '' });
        window.location = "/"
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <form method="POST" className="login-form" onSubmit={this.handleSubmit}>
        <FormField type="text" name="username" label="Username" value={this.state.username} onChange={this.handleChange} />
        <FormField type="text" name="password" label="Password" value={this.state.password} onChange={this.handleChange} />
        <Link to="/"><Button type="submit">Login</Button></Link>
        <Link to="/register">
          <TextLink>Don't have an account? Register</TextLink>
        </Link>
      </form>
    );
  }
}

export default LoginForm;