// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import routes from './../../../router'

class ContentLayout extends Component<Props, State> {
    render() {
        return (
            <div>
                {
                    routes.map((item,i) =>
                        <Route key={i} path={ item.path } component={ item.component } exact />
                    )
                }
            </div>
        )
    }
}

interface Props {}
interface State {}

export default ContentLayout