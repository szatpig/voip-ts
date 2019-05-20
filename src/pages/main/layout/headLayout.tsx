// Created by szatpig at 2019/5/20.
import React, { Component } from 'react'
import { Icon,Breadcrumb,Popover,Badge   } from 'antd';
import { observer,inject } from 'mobx-react'

import defaultHeadImg from './../../../images/default.png'

@inject('title')
@observer
class HeadLayout extends Component<Props, State>{
    state = {
        count:5
    }
    render(){
        const { title:{ collapsed ,toggle } } = this.props;
        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
        return(
            <div className="head-content">
                <div className="left-wrap">
                    <Icon
                        className="trigger"
                        type={ collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={ toggle }
                    />
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="1">Application Center</a></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="right-wrap">
                    <div className="item-wrap">
                        <Icon type="qrcode" />扫码录音
                    </div>
                    <div className="item-wrap"><Icon type="aliwangwang" />坐席</div>
                    <div className="item-wrap"><Icon type="bulb" />帮助中心</div>
                    <div className="item-wrap">
                        <Badge count={this.state.count} offset={[4,0]}>
                            <Icon type="bell" />消息
                        </Badge>
                    </div>
                    <div className="item-wrap">
                        <Popover placement="bottom" title={text} content={content} trigger="hover">
                            <img src={ defaultHeadImg } alt="用户头像"/>
                            <span className="item-name">ljtest001@ynt.ai</span>
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}

interface Props {
    title:title
}
interface State {}

export default HeadLayout