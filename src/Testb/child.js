
import React, { Component } from "react";
import { Input } from 'reactstrap';

import Child from "./child"
class Parent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		// state设置一个id
			id: ''
		};
		const { addRefFun } = props;
		if (typeof addRefFun === 'function') {
			addRefFun(this); // 在这里把this暴露给`parentComponent`
		}
	}

	onChange = () => {
	  console.log(123)
	}

	render() {

		return (
			<Input onChange={this.onChange} />
		)
	}
}

export default Parent;