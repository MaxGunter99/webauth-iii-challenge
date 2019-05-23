
import React, { Component } from "react";
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';

class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios
            .get('/users')
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <>
                <h2>List of Users</h2>
                <ul>
                    {this.state.users.map(u => (
                        <li key={u.id}>
                            Username: {u.username} <br></br> Department: {u.department}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default requiresAuth( Users );