import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import AppContainer from './containers/AppContainer'

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
      
  );
}

export default App;
