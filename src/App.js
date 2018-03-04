import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

//includes
import { Menu } from 'semantic-ui-react'

// alternative scss->css file.
import './assets/css/default.css'

// Footer
import Footer from './Footer/Footer';

// 404
import NotFound from './NotFound/NotFound';

import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)
const About = asyncComponent(() =>
    import('./About/About').then(module => module.default)
)
const Contact = asyncComponent(() =>
    import('./Contact/Contact').then(module => module.default)
)
const Blog = asyncComponent(() =>
    import('./Blog/Blog').then(module => module.default)
)


const history = createBrowserHistory();

class App extends Component {
  
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    
    const { activeItem } = this.state
    
    return (
         
      <Router history={history}>
       
      <div className="ui  container" inverted vertical >

            <Menu inverted pointing borderless raised> 
              <Menu.Item as= { Link } name='Home' to='/' onClick={this.handleItemClick}><img src='../images/logo.png' alt='react-logo' title='Home' /></Menu.Item>
              <Menu.Item as= { Link } name='Home' to='/' active={activeItem === 'Home'} onClick={this.handleItemClick} />
              <Menu.Item as= { Link } name='About' to='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
              <Menu.Item as= { Link } name='Blog' to='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick} />
              <Menu.Item as= { Link } name='Contact' to='Contact' active={activeItem === 'Contact'} position='right' onClick={this.handleItemClick} />
            </Menu>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
              <Route path='/Blog' component={Blog} />
              <Route path='*' component={NotFound} />
            </Switch>
      
      <Footer />
      </div>
      </Router>

  
      
    )
  }
}

export default App;
