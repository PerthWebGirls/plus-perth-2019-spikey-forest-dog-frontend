import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Pets from '../pages/Pets';
// import AboutUs from '../pages/AboutUs';


class AppContainer extends Component {
    constructor(props) {
      super(props);}
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
              </>
          );
    }
}

export default AppContainer;
