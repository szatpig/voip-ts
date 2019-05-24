// Created by szatpig at 2019/5/21.
import React, {Component} from 'react'

import { Select,Input } from 'antd';
const Option = Select.Option;

interface Props {
}

interface State {
    gatewayName:string
}

class Converse extends Component<Props, State> {
    static defaultProps = {}

    static state:State ={
        gatewayName:'',
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    onChange = (e:any):void =>{
        if(typeof e === 'object'){
            console.log(e);
            this.setState({
                gatewayName:e
            })
        }
    };
    onSearch = (e:any)=>{

    }

    render() {
        return (
            <div className="converse-container">
                <div className="search-container">
                    <div className="left-wrap">
                        <Input placeholder="请输入网关名称"
                               onChange={ this.onChange } />
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="请选择网关类型"
                            optionFilterProp="children"
                            onChange={ this.onChange }
                            onSearch={ this.onSearch }
                            filterOption={(input, option:any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                         </Select>
                    </div>
                    <div className="right-wrap"></div>
                </div>
                <div className="table-container"></div>
                <div className="page-container"></div>
            </div>
        )
    }
}

export default Converse