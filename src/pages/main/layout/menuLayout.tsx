// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Menu,Icon } from 'antd';

// const { SubMenu } = Menu;

class MenuLayout extends Component<Props, State>{
    static state:State ={
        defaultSelectedKeys:['dashboard']
    };
    render(){
        const { collapsed,selectedMenu } = this.props;
        const { pathname } = selectedMenu;
        return(
            <div className="menu-container">
                <div className={`logo-wrap ${ collapsed ?  'active': '' }`} >voip运维平台</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ [pathname] }>
                    <Menu.Item key="/home/dashboard">
                        <Icon type="dashboard" />
                        <Link to="/home/dashboard">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="/home/converse">
                        <Icon type="customer-service" />
                        <Link to="/home/converse"><span>会话管理</span></Link>
                    </Menu.Item>
                    <Menu.Item key="/home/gateway">
                        <Icon type="gateway" />
                        <Link to="/home/gateway">网关管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/home/route">
                        <Icon type="hdd" />
                        <Link to="/home/route">路由管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/home/hlr">
                        <Icon type="cloud-server" />
                        <Link to="/home/hlr">HLR管理</Link>
                    </Menu.Item>
                    {/*<SubMenu key="sub1" title={<span><Icon type="robot"  /><span>外呼中心</span></span>}>*/}
                        {/*<Menu.Item>外呼计划</Menu.Item>*/}
                        {/*<Menu.Item>已呼叫记录</Menu.Item>*/}
                        {/*<Menu.Item>客户管理</Menu.Item>*/}
                        {/*<Menu.Item>线路管理</Menu.Item>*/}
                        {/*<Menu.Item>短信发送</Menu.Item>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </div>
        )
    }
}

interface Props {
    collapsed:boolean,
    selectedMenu:any
}
interface State {
    defaultSelectedKeys:string[]
}

export default MenuLayout