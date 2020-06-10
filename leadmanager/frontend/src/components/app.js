import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import alertTemplate from 'react-alert-template-basic'
import { Provider as AlertProvider } from 'react-alert'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect   } from 'react-router-dom'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import store from '../store'
import Login from './accounts/Login'
import Register from './accounts/Register'
import Profile from './accounts/Profile'
import PrivateRoute  from './commun/privateRoutes'
import { loadUser } from '../actions/auth'

// Alert Options
const alertOptions ={
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={alertTemplate} {...alertOptions} >
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                     <PrivateRoute exact path='/' component={Dashboard} />
                                     <Route exact path='/login' component={Login} />
                                     <Route exact path='/register' component={Register} />
                                     <Route exact path='/profile' component={Profile} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
               </AlertProvider>
            </Provider>
    )}
}

ReactDom.render(<App />, document.getElementById('app'))