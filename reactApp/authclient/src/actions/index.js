
//IMPORTS
import axios from 'axios';

//REGISTER USER
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = userInfo => dispatch => {
    console.log( userInfo )
    dispatch({ type: REGISTER })
    return axios.post( 'http://localhost:4242/api/auth/register' , userInfo)
        .then( res => {
            dispatch({ type: REGISTER_SUCCESS , payload: res.data.token })
            localStorage.setItem( 'jwt' , res.data.token );
            console.log( res );
        })
        .catch( error => {
            dispatch({ type: REGISTER_FAILURE, payload: error.message })
        })
}

//USER LOGIN
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: LOGIN })
    return axios.post( 'http://localhost:4242/api/auth/login' , userInfo )
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            localStorage.setItem('jwt', res.data.token);
        })
        .catch(error => {
            dispatch({ type: LOGIN_FAILURE, payload: error.message })
        })
}