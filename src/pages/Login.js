import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store';



class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        const {username, password} = this.state;
        e.preventDefault();
        this.props.login(username, password);
        this.props.history.push('/'); //home page
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login:</h2>
                    <div>
                        <input 
                            type="email" 
                            value={this.state.username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            placeholder="Email..." 
                            required />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                            placeholder="Password..." 
                            required />
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