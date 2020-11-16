
import React, { Component } from "react";
import Child from "./child"
class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		// state设置一个id
			id: ''
		};
	}
	componentDidMount() {
		// 父组件获取子组件的一个方法
		this.childRef.onChange()
	}

	addRefFun = (ref) => {
		this.childRef = ref
	}

	render() {
		return (
			<Child addRefFun={this.addRefFun}/>
		)
	}
}
export default Parent;