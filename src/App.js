import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import ProjectBoard from './pages/ProjectBoard';
import LoginPage from './pages/LoginPage';
import Workspaces from './pages/Workspaces';
import Register from './pages/Register'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Route path="/" component={LoginPage} exact/>
            <Route path="/login-page" component={LoginPage} exact/>
            <Route path="/projectBoard" component={ProjectBoard} exact/>
            <Route path="/workspaces" component={Workspaces} exact/>
            <Route path="/register" component={Register} exact/>
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;