import React, { Component } from 'react';

class Home extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <h1>Welcome to the Home Page</h1>
                <button onClick={() => history.push('/login')}>Go!</button>
            </div>
        );
    }
}

export default Home;