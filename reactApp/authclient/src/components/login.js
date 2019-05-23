
//IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import '../App.css';

//LOGIN FORM
class LoginForm extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
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
        this.props.login(this.state.userInfo).then(() => this.props.history.push("/users"))
    };

    render() {
        return (
            <div className="form-wrap">
                <form className='login' onSubmit={this.submitDataHandler}>
                    <div className="sign-header">
                        <h1>Sign In</h1>
                    </div>
                    <label>Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.userInfo.username}
                        className='in user'
                        placeholder="Username"
                        onChange={this.changeHandler}
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.userInfo.password}
                        className='in pass'
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />
                    <button type='submit' className='actButton' >Log In!</button>
                    <p>
                        Sign in below to access your dashboard. Don't have an account yet?
                        <br></br>
                        <Link to="/">Create one here.</Link>
                    </p>
                </form>
                <div />
            </div>
        )
    }
}
export default connect(
    null,
    { login }
)(LoginForm)