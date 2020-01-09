import React, { Component } from "react";

class Home extends Component {
  componentDidMount(){
    var option = {host: window.config.bose3dHost, viewport: "viewer"};
    const BIMWINNER = window.BIMWINNER;
    var viewer3D = new BIMWINNER.BOS3D.Viewer(option);

    var modelKey = "M1577068140338";//在此指定模型key，请更换modelKey以查看自己上传的模型
    var projectKey = "test";

    var tool = new BIMWINNER.BOS3D.UI.ToolBar(viewer3D);
    tool.createTool();

    viewer3D.addView(modelKey, projectKey);
    //适应屏幕大小
    window.viewer3D = viewer3D

    viewer3D.autoResize();
    window.addEventListener("resize",function () {
      viewer3D.autoResize();
    })
  }
  render(){
    return(
      <div className="container home-wrap">
        <h1 className="text-center">This is home page</h1>
        <div className="w-75 mx-auto" style={{overflow: "scroll"}}>
          <div id="viewer"></div>
        </div>
      </div>
    )
  }
}
export default Home