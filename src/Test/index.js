import React, { Component } from "react";
import { Card, Tag } from "antd";
import Moment from 'react-moment';

import MyButton from "../Components/MyButton";
import { global_config } from "../config/global_config"
import { formatCurrency } from '../utils/common'

class Test extends Component {
  
  render(){
    return(
      <div className="container test-wrap">
        <h1 className="">Test page one</h1>
        <Card className="mt-3" title="test for global value and fuction">
          <MyButton />
        </Card>
        <Card className="mt-3" title="Use global_config in config/global_config.js">
        SUCCESS_STATUS_TEXT: <Tag color="green">{global_config.SUCCESS_STATUS_TEXT}</Tag>
        </Card>
        <Card className="mt-3" title="Use util in util.js">
          formatCurrency:
          <span className="ml-3">
            1234567 --> <Tag color="green">{formatCurrency("1234567")}</Tag>
          </span>
          <span className="ml-3">
            1234567 --> <Tag color="green">{formatCurrency("1234567","￥")}</Tag>
          </span>
          <span className="ml-3">
            -1234567 --> <Tag color="green">{formatCurrency("-1234567")}</Tag>
          </span>
        </Card>
        <Card className="mt-3" title="Example usage of third party moment.js">
          <Tag color="green">
            <Moment format="YYYY/MM/DD">
              1976-04-19T12:59-0500
            </Moment>
          </Tag>
          <Tag color="green">
            <Moment format="YYYY/MM/DD">
                {new Date()}
            </Moment>
          </Tag>
          
        </Card>
        
      </div>
    )
  }
}

export default Test