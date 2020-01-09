import React, { Component } from "react";
import { AppContext } from './AppContext';
import Header from '../Components/Header';
import 'antd/dist/antd.css';

class Template extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      toggle: this.toggle,
      buttonText: "off",
      toggleOnOff: () =>{
        let newButtonText = "on"
        if(this.state.buttonText === "on"){
          newButtonText = "off"
        }
        this.setState({
          buttonText: newButtonText
        })
      }
    }
    
  }
  toggle = (field, data) => { //设定toggle方法，会作为context参数传递
    this.setState(state => ({
      [field]: data
    }));
  };
  render(){
    return(
      <AppContext.Provider value={this.state}>
        <Header history={this.props.history}/>
        <div className="container main-template-wrap">
          {this.props.children}
        </div>
      </AppContext.Provider>
    )
  }
}

export default Template