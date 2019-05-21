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
    static defaultProps = {
        title:{}
    }

    componentDidMount() {
    }

    render() {
        const { collapsed } = this.props.title;
        console.log(collapsed,this.props);
        return (
            <Layout className="main-container">
                <Sider width={180}
                       collapsed={ collapsed } >
                    <MenuLayout collapsed = { collapsed } selectedMenu={ this.props.location } />
                </Sider>
                <Layout>
                    <Header className='header-container'>
                        <HeadLayout />
                    </Header>
                    <Content className='content-container'>
                        <ContentLayout {...this.props.match } />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

interface Props {
    title:any,
    match:any,
    location:any
}
interface State {}

export default MainContainer