// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'

import { Layout } from 'antd';
import ContentLayout from './layout/contentLayout'
import HeadLayout from './layout/headLayout'
import MenuLayout from './layout/menuLayout'

import {inject, observer} from "mobx-react";

const { Header, Sider, Content } = Layout;

@inject('title')
@observer
class MainContainer extends Component<Props, State> {
    static defaultProps = {}

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        const { title:{ collapsed  } } = this.props;
        return (
            <Layout className="main-container">
                <Sider width={180}
                       collapsed={ collapsed } >
                    <MenuLayout collapsed = { collapsed } />
                </Sider>
                <Layout>
                    <Header className='header-container'>
                        <HeadLayout />
                    </Header>
                    <Content className='content-container'>
                        <ContentLayout />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

interface Props {
    title:title
}
interface State {}

export default MainContainer