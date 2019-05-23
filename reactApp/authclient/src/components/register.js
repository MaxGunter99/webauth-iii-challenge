
//IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/index';
import '../App.css';

//REGISTER FORM
class RegisterForm extends Component {
    state = {
        userInfo: {
            username: '',
            password: '',
            department: ''
        }
    }


    changeHandler = event => {
        event.preventDefault();
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [ event.target.name ]: event.target.value
            }
        });
    };

    submitDataHandler = event => {
        event.preventDefault();
        this.props.register( this.state.userInfo ).then( () => this.props.history.push( "/login" ))
    };

    render() {
        return (
            <div className = "form-wrap">
                <form className = 'register' onSubmit={ this.submitDataHandler }>
                    <div className = "sign-header">
                        <h1>Register</h1>
                    </div>
                    <label>Username:</label>
                    <input
                        id = "username"
                        type = "text"
                        name = "username"
                        value = { this.state.userInfo.username }
                        className = 'input'
                        placeholder = "Username"
                        onChange = { this.changeHandler }
                    />
                    <label>Password:</label>
                    <input
                        id = "password"
                        type = "password"
                        name = "password"
                        value = { this.state.userInfo.password }
                        className = 'input'
                        placeholder = "Password"
                        onChange = { this.changeHandler }
                    />
                    <label>Department:</label>
                    <input
                        id = "department"
                        type = "department"
                        name = "department"
                        value = { this.state.userInfo.department }
                        className = 'input'
                        placeholder = "Department"
                        onChange = { this.changeHandler }
                    />
                    <button type='submit' className='actButton'>Register</button>
                    <p>
                        Already have an account?
                        <br></br>
                        <Link to="/login">Login</Link>
                    </p>
                </form>
                <div />
            </div>
        )
    }
}

//EXPORTS
export default connect(
    null,
    { register }
)(RegisterForm)