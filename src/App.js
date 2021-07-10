import React from 'react'
import './App.css';
import { BrowserRouter as  Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import JobApp from './pages/JobApp';
import PostJob from './pages/PostJob';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/Jobapp' component={JobApp}/>
        <Route path='/Postjob' component={PostJob}/>
        <Redirect path='/' to='/home'/>
      </Switch>
    </Router>
  );
}

export default App;