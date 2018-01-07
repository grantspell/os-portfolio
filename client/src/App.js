import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// COMPONENTS
import Home from './components/Home'
import Project from './components/Project'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Project} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App