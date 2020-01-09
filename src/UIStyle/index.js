import React, { Component } from "react";
import { 
  Row,
  Col,
  Collapse, 
  Button, 
  Select,
  Input,
  Radio,
  Switch,
  Breadcrumb, 
  Icon, 
  Divider,
  Popover,
  Alert,
  Card,
  Tooltip,
  Modal,
  Table,
  Tabs,
  Steps
} from 'antd';


const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Option } = Select;
const { Step } = Steps;

const popoverContent = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const dataSource = [];

for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


function callback(key) {
  console.log(key);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onSwitchChange(checked) {
  console.log(`switch to ${checked}`);
}


class UIStyle extends Component {
  state = { 
    modal_visible: false,
    radio_value: 1
  };
  showModal = () => {
    this.setState({
      modal_visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modal_visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modal_visible: false,
    });
  };

  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      radio_value: e.target.value,
    });
  };

  render(){
    return(
      <div className="container uistyle-wrap">
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="UI of different component" key="1">
            <Card title="Button & input">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                  <Button type="primary">Primary</Button>{' '}
                  <Button>Default</Button>
                </Col>
                <Col span={6}>
                  <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Col>
                <Col span={6}>
                  <Input placeholder="Basic usage" />
                </Col>
                <Col span={6}>
                  <Radio.Group onChange={this.onRadioChange} value={this.state.radio_value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                  </Radio.Group>
                  <Switch defaultChecked onChange={onSwitchChange} />
                </Col>
              </Row>
            </Card>

            <Card title="Divider & icon">
              <Col span={24}>
                  <Icon type="fast-backward" />
                  <Icon type="dingding" />
                  <Icon type="twitter" />
                  <Icon type="book" />
                  <Icon type="sync" spin />
                </Col>
              <Divider orientation="left"></Divider>
            </Card>
            
            <Card title="Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <Icon type="user" />
                  <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
              </Breadcrumb>
            </Card>
            
            <Card title="Popover & Alert">
              <Row>
                <Col span={12}>
                  <Popover content={popoverContent} title="Title" trigger="hover">
                    <Button>Hover me</Button>
                  </Popover>
                </Col>
                <Col span={12}>
                  <Alert message="Informational Notes" type="info" showIcon />
                </Col>
              </Row>
            </Card>

            <Card title="Tooltip">
              <Tooltip title="prompt text">
                <span>Tooltip will show on mouse enter.</span>
              </Tooltip>
            </Card>


            <Card title="Modal">
              <Button type="primary" onClick={this.showModal}>
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                visible={this.state.modal_visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </Card>

            <Card title="Table & pagination">
              <Table dataSource={dataSource} columns={columns} size="small" />;
            </Card>

            <Card title="Table & pagination">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </Card>

            <Card title="Step">
              <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </Card>
            
          </Panel>
          
        </Collapse>
        
      </div>
    )
  }
}

export default UIStyle