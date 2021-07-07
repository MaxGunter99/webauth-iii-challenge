import axios from "axios";
import React from "react";

axios.defaults.baseURL = "http://localhost:4242/api";

axios.interceptors.request.use(
    function (options) {
        options.headers.authorization = localStorage.getItem('jwt');
        return options;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <div className = 'notAccepted'>Please Login to see the users</div>;
            return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
        }
    };
}