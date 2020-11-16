import React, { Component } from "react";
import Button from "../Components/Button"

import Parent from "./parent"

class Testb extends Component {
  render(){
    return(
      <div className="container testb-wrap">
        <h1>This is testb page</h1>
        <Button />
        <Parent />
      </div>
    )
  }
}

export default Testb