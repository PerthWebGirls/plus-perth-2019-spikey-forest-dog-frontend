import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Pets from '../pages/Pets';
import Pet1 from '../pages/Pet1';
import Pet2 from '../pages/Pet2';
import Pet3 from '../pages/Pet3';
import Pet4 from '../pages/Pet4';
import Pet5 from '../pages/Pet5';
import Pet6 from '../pages/Pet6';
import SinglePet from '../pages/SinglePet';
import Favourites from '../pages/Favourites';
import Faqs from '../pages/Faqs';
import Account from '../pages/Account';
import AboutUs from '../pages/AboutUs';


class AppContainer extends Component {
    constructor(props) {
      super(props);
    }

    handlePetChange(){
        var div = document.getElementById('all-pets');
        div.innerHTML = "";
        fetch('http://localhost:8000/pets/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => {
          let allpets = data;
          allpets.forEach(function(value){
              var name = value.name;
              var breed = value.breeds_display;
              var gender = value.gender;
              var location = value.state;
              var age = value.age;
              var pet_type = value.pet_type;
  
              var newAnimal = `<div class="indi-pet col-6">
                              <div class="single-pet-image">
                                      <h3>${name}</h3>
                              </div><div class="Traits row">
                              <div class="pet-trait col-6">
                                      <h3>Breend</h3>
                                      <p>${breed}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Gender</h3>
                                  <p>${gender}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Age</h3>
                                  <p>${age}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Location</h3>
                                  <p>${location}</p>
                              </div>
                              </div>
                              </div>`;
              if(pet_type === "cat"){
                div.innerHTML += newAnimal
              }
              else{
                  div.innerHTML += "";
              }
             
              // $('#all-pets').append(newAnimal);
                  // document.getElementById("all-pets").appendChild(newAnimal);
  
  
  
          });
  
        })
        .catch(err => {
          console.log(err);
        });
    };
    handleAllChange(){
        var div = document.getElementById('all-pets');
        div.innerHTML = "";
        fetch('http://localhost:8000/pets/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => {
          let allpets = data;
          allpets.forEach(function(value){
              var name = value.name;
              var breed = value.breeds_display;
              var gender = value.gender;
              var location = value.state;
              var age = value.age;
              var pet_type = value.pet_type;
              var newAnimal = `<div class="indi-pet col-6">
                              <div class="single-pet-image">
                                      <h3>${name}</h3>
                              </div><div class="Traits row">
                              <div class="pet-trait col-6">
                                      <h3>Breend</h3>
                                      <p>${breed}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Gender</h3>
                                  <p>${gender}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Age</h3>
                                  <p>${age}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Location</h3>
                                  <p>${location}</p>
                              </div>
                              </div>
                              </div>`;
                div.innerHTML += newAnimal
              // $('#all-pets').append(newAnimal);
                  // document.getElementById("all-pets").appendChild(newAnimal);
  
  
  
          });
  
        })
        .catch(err => {
          console.log(err);
        });
    };
    handleDogChange(){
        var div = document.getElementById('all-pets');
        div.innerHTML = "";
        fetch('http://localhost:8000/pets/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => {
          let allpets = data;
          allpets.forEach(function(value){
              var name = value.name;
              var breed = value.breeds_display;
              var gender = value.gender;
              var location = value.state;
              var age = value.age;
              var pet_type = value.pet_type;
        
  
              var newAnimal = `<div class="indi-pet col-6">
                              <div class="single-pet-image">
                                      <h3>${name}</h3>
                              </div><div class="Traits row">
                              <div class="pet-trait col-6">
                                      <h3>Breend</h3>
                                      <p>${breed}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Gender</h3>
                                  <p>${gender}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Age</h3>
                                  <p>${age}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Location</h3>
                                  <p>${location}</p>
                              </div>
                              </div>
                              </div>`;
              if(pet_type === "dog"){
                div.innerHTML += newAnimal
              }
              else{
                  div.innerHTML += "";
              }
             
              // $('#all-pets').append(newAnimal);
                  // document.getElementById("all-pets").appendChild(newAnimal);
  
  
  
          });
  
        })
        .catch(err => {
          console.log(err);
        });
    };
    handleOtherChange(){
        var div = document.getElementById('all-pets');
        div.innerHTML = "";
        fetch('http://localhost:8000/pets/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => {
          let allpets = data;
          allpets.forEach(function(value){
              var name = value.name;
              var breed = value.breeds_display;
              var gender = value.gender;
              var location = value.state;
              var age = value.age;
              var pet_type = value.pet_type;
          
  
              var newAnimal = `<div class="indi-pet col-6">
                              <div class="single-pet-image">
                                      <h3>${name}</h3>
                              </div><div class="Traits row">
                              <div class="pet-trait col-6">
                                      <h3>Breend</h3>
                                      <p>${breed}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Gender</h3>
                                  <p>${gender}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Age</h3>
                                  <p>${age}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Location</h3>
                                  <p>${location}</p>
                              </div>
                              </div>
                              </div>`;
              if(pet_type != "dog" && pet_type != "cat"){
                div.innerHTML += newAnimal
              }
              else{
                  div.innerHTML += "";
              }
             
              // $('#all-pets').append(newAnimal);
                  // document.getElementById("all-pets").appendChild(newAnimal);
  
  
  
          });
  
        })
        .catch(err => {
          console.log(err);
        });
    };

 getAllPets(){
    fetch('http://localhost:8000/pets/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => {
          let allpets = data;
          allpets.forEach(function(value){
              var name = value.name;
              var breed = value.breeds_display;
              var gender = value.gender;
              var location = value.state;
              var age = value.age;
              var pet_type = value.pet_type;
          
  
              var newAnimal = `<div class="indi-pet col-6">
                              <div class="single-pet-image">
                                      <h3>${name}</h3>
                              </div><div class="Traits row">
                              <div class="pet-trait col-6">
                                      <h3>Breend</h3>
                                      <p>${breed}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Gender</h3>
                                  <p>${gender}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Age</h3>
                                  <p>${age}</p>
                              </div>
                              <div class="pet-trait col-6">
                                  <h3>Location</h3>
                                  <p>${location}</p>
                              </div>
                              </div>
                              </div>`;
  
              var div = document.getElementById('all-pets');
              div.innerHTML += newAnimal;
              // $('#all-pets').append(newAnimal);
                  // document.getElementById("all-pets").appendChild(newAnimal);
  
  
  
          });
  
        })
        .catch(err => {
          console.log(err);
        });
 }

      componentDidMount() {
        this.getAllPets();

    //   function changePage(){

    //     console.log(allpets);

    //   }

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
                      <Pets onCatClick={this.handlePetChange} onDogClick={this.handleDogChange} onOtherClick={this.handleOtherChange} onAllClick={this.handleAllChange}/>
                  )
              }}
              />
              <Route 
              path="/favourites"
              component={() =>{
                  return(
                      <Favourites />
                  )
              }}
              />
              <Route 
              path="/faqs"
              component={() =>{
                  return(
                      <Faqs />
                  )
              }}
              />
              <Route 
              path="/single-pet"
              component={() =>{
                  return(
                      <SinglePet />
                  )
              }}
              />
              <Route 
              path="/aboutus"
              component={() =>{
                  return(
                      <AboutUs/>
                  )
              }}
              />
              <Route 
              path="/account"
              component={() =>{
                  return(
                      <Account/>
                  )
              }}
              />
              <Route 
              path="/pet1"
              component={() =>{
                  return(
                      <Pet1/>
                  )
              }}
              />
               <Route 
              path="/pet2"
              component={() =>{
                  return(
                      <Pet2/>
                  )
              }}
              />
              <Route 
              path="/pet3"
              component={() =>{
                  return(
                      <Pet3/>
                  )
              }}
              />
              <Route 
              path="/pet4"
              component={() =>{
                  return(
                      <Pet4/>
                  )
              }}
              />
              <Route 
              path="/pet5"
              component={() =>{
                  return(
                      <Pet5/>
                  )
              }}
              />
              <Route 
              path="/pet6"
              component={() =>{
                  return(
                      <Pet6/>
                  )
              }}
              />

              </>
          );
    }
}

export default AppContainer;
