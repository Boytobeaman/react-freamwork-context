import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'
import { APP_URL_NAME, routes } from '../../config/router';

const { Header } = Layout;
class CusHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogoutSubmit(){
    this.props.history.push(`${APP_URL_NAME}/login`)
  }
  render() {
    return (
      <>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={['3']}
            style={{ lineHeight: '64px' }}
          >
            {
                routes.filter(item => item.showInUI).map((route, index) => {
                  return (
                    <Menu.Item  key={index}>
                      <NavLink to={route.path} className='nav-link'>{route.showText}</NavLink>
                    </Menu.Item>
                  )
                })
              }
          </Menu>
        </Header>
      </>
    );
  }
}


export default withRouter(CusHeader)