import React, { Component } from "react";
import { Card, Icon } from "antd";
import MyButton from "../Components/MyButton"
import Api from "../utils/api"

class Testb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather:{
        calling: false,
        statusText: '',
        data: {}
      }
    };
  }
  getWeather = async () =>{
    try {
      let weatherInstance = Api.weather.instance
      // weatherInstance.defaults.headers.common['Authorization'] = config.weatherKey
      let weather = this.state.weather;
      weather.calling = true
      this.setState({
        weather: weather
      })
      let response = await weatherInstance.get(`/weather?q=London&appid=${window.config.weatherKey}`)

      weather.statusText = response.statusText
      weather.calling = false
      if(response.statusText === global.config.SUCCESS_STATUS_TEXT){
        weather.data = response.data
      }
      this.setState({
        weather: weather
      })
    }
    catch(err) {
      let weather = this.state.weather;
      weather.calling = false
      weather.statusText = err.message
      this.setState({
        weather: weather
      })
    }
  }
  componentDidMount(){
    
    // this.getNews();
    this.getWeather();

  }
  render(){
    return(
      <div className="container testb-wrap">
        <h1 className="">Test page two</h1>
        <Card className="mt-3" title="Test for global value and fuction">
          <MyButton />
        </Card>
        <Card className="mt-3" title="Test API for get weather">
          Get weather: 
          {this.state.weather.calling &&(
            <Icon type="loading" />
          )}
          {this.state.weather.statusText &&(
            this.state.weather.statusText
          )}
        </Card>
      </div>
    )
  }
}

export default Testb