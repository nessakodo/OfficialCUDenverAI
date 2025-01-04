import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Events from './components/Events';
import Aboutus from './components/AboutUs';
import Nav from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/events" component={Events} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;