import React, {Component} from "react"
import Layout from "./hoc/Layout/Layout"
import Header from "./components/header"
import {Route,Switch} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Registry from './containers/Registr/Registr'
import DesignCreator from './containers/DesignCreator/DesignCreator'
import Home from './containers/Home/Home'
import Users from './containers/Users'
import TshirtDetail from './containers/TshirtDetail/TshirtDetail'
import UserPortfolio from './containers/UserPage/UserPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Layout>
      <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/creator" component={DesignCreator}/>
          <Route path="/design/:id" component={Header}/>
          <Route path="/signup" component={Registry}/>
          <Route path="/userslist" component={Users}/>
          <Route path="/tshirts/:tsId" exact component={TshirtDetail}/>
          <Route path="/users/:uName" exact component={UserPortfolio}/>
          <Route path="/" component={Home}/>
      </Switch>               
      </Layout>
    )
  }
}

export default App
