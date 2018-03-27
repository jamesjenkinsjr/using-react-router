import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store';



class Login extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.login('admin','password');
                    this.props.history.push('/'); //home page
                }}>
                    <h2>Login:</h2>
                    <div>
                        <input type="email" placeholder="Email..." required />
                    </div>
                    <div>
                        <input type="password" placeholder="Password..." required />
                    </div>
                    <button onClick={''}>Login</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);