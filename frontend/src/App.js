import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';
import Blog from './components/Blog.tsx';
import Events from './components/Events.tsx';
import AboutUs from './components/AboutUs.tsx';
import Nav from './components/Navbar.tsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/events" component={Events} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;