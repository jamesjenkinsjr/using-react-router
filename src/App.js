import React, {
  Component
} from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route path='/login' component={LoginPage} />
        {/* <HomePage />
        <hr/>
        <LoginPage />
        <hr/>
        <SignupPage /> */}
      </div>
    );
  }
}

export default App;