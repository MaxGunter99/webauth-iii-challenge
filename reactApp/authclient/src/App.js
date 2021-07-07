
//IMPORTS
import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import register from './components/register';
import login from './components/login';
import Users from './components/users';

function App(props) {
  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  };

  return(
    <div className='links' >
      <nav>
          <NavLink exact to='/'> Register </NavLink>
        &nbsp;|&nbsp;
          <NavLink exact to='/login'> Login </NavLink>
        &nbsp;|&nbsp;
          <NavLink exact to='/users'> Users </NavLink>
        &nbsp;|&nbsp;
          <NavLink onClick={logout} className = 'logout' to ='/login' >Logout</NavLink>
      </nav>
      <Route exact path='/' component={register} />
      <Route exact path='/login' component={login} />
      <Route path='/users' component={Users} />
    </div>
  );

}

export default withRouter(App);
