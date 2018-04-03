import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// COMPONENTS
import Home from './components/Home'
import Project from './components/Project'

// SANDBOX COMPONENTS
import Sandbox from './components/sandbox/Sandbox'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sandbox" component={Sandbox} />
            <Route path="/:id" component={Project} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App