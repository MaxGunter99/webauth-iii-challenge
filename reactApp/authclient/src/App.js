
//IMPORTS
import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , NavLink } from 'react-router-dom';
import register from './components/register';
import login from './components/login';



function App() {
  return (
    <div className = 'links' >
        <nav>
            <NavLink exact to = '/'> Home </NavLink>
            <NavLink exact to = '/register'> Register </NavLink>
            <NavLink exact to = '/login'> Login </NavLink>
        </nav>
      <Route exact path = '/register' component = { register }/>
      <Route exact path = '/login' component = { login }/>
    </div>
  );
}

export default App;
