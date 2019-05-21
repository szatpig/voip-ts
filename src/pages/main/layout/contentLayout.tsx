// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import routes from './../../../router'

class ContentLayout extends Component<Props, State> {
    render() {
        const  { url } =this.props;
        return (
            <div className="wrapper-container">
                {
                    routes.map((item,i) =>
                        <Route key={i} path ={ url + item.path } component={ item.component } exact />
                    )
                }
            </div>
        )
    }
}

interface Props {
    url:string
}
interface State {}

export default ContentLayout