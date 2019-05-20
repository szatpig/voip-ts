// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Menu,Icon } from 'antd';

const { SubMenu } = Menu;

export default class MenuLayout extends Component{
    // state = {
    //     collapsed : this.props.collapsed
    // }
    render(){
        console.log('MenuLayout',this.props);
        const { collapsed } = this.props;
        return(
            <div className="menu-container">
                <div className={`logo-wrap ${ collapsed ?  'active': '' }`} >小意机器人</div>
                <Menu theme="dark" mode="inline">
                    <Menu.Item>
                        <Icon type="home" theme="filled" />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="robot"  /><span>外呼中心</span></span>}>
                        <Menu.Item>外呼计划</Menu.Item>
                        <Menu.Item>已呼叫记录</Menu.Item>
                        <Menu.Item>客户管理</Menu.Item>
                        <Menu.Item>线路管理</Menu.Item>
                        <Menu.Item>短信发送</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}