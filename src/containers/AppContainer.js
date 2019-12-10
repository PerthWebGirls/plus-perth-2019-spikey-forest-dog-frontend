import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Pets from '../pages/Pets';
import Favourites from '../pages/Favourites';
import Faqs from '../pages/Faqs';

const API_URL = 'https://api.openweathermap.org/data/2.5';

class AppContainer extends Component {
    constructor(props) {
      super(props);}

      fetchApiData() {
        fetch(
          `${API_URL}/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        ) // Call the fetch function passing the url of the API as a parameter
          .then(response => {
            console.log(response);
            return response.json();
            // Your code for handling the data you get from the API
          })
          .then(data => {
            console.log(data);
            this.setState({ temperature: data.main.temp });
          })
          .catch(function(err) {
            console.error(err);
            // This is where you run code if the server returns any errors
          });
      }
    
      render(){
          return(
              <>
              <Route 
              path="/login"
              component={() =>{
                  return(
                      <Login/>
                  )
              }}
              />
              <Route 
              path="/register"
              component={() =>{
                  return(
                      <Register/>
                  )
              }}
              />
              <Route 
              path="/"
              component={() =>{
                  return(
                      <Home/>
                  )
              }}
              exact
              />
               <Route 
              path="/pets"
              component={() =>{
                  return(
                      <Pets/>
                  )
              }}
              exact
              />
              <Route 
              path="/favourites"
              component={() =>{
                  return(
                      <Favourites />
                  )
              }}
              exact
              />
              <Route 
              path="/faqs"
              component={() =>{
                  return(
                      <Faqs />
                  )
              }}
              exact
              />
              <Route 
              path="/single-pet"
              component={() =>{
                  return(
                      <SinglePet />
                  )
              }}
              exact
              />
              </>
          );
    }
}

export default AppContainer;
