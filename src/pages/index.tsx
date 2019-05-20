// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom';

import Login from './auth/login'
import Main from './main'

 class Pages extends Component{
    static defaultProps = {}
    componentDidMount() {}
    render() {
        return (
            <Switch>
                <Route path='/login' component={ Login } />
                <Route path='/' component={ Main } />
            </Switch>
        )
    }
}

export default Pages