import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { NavLink, withRouter } from 'react-router-dom'

import logo from './logo.svg';

import { APP_NAME, APP_URL_NAME, routes } from '../../config/global';
class Header extends Component {
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
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href={APP_URL_NAME}> 
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {APP_NAME}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
              {
                routes.map((route, index) => {
                  if(route.showInUI){
                    return (
                      <NavItem key={index}>
                        <NavLink to={route.path} className='nav-link'>{route.showText}</NavLink>
                      </NavItem>
                    )
                  }else{
                    return ''
                  }
                })
              }
            </Nav>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar id='main-menu-dropdown'>
                <DropdownToggle nav caret>
                  TEST A
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    TEST
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogoutSubmit}>
                    Logout
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default withRouter(Header)