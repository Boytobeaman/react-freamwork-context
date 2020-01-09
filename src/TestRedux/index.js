import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from 'react-redux'

import MyButton from "../Components/MyButton";
import TodoList from "../Components/TodoList";
import AddTodo from "../Components/AddTodo";
import { AppContext } from '../MainPage/AppContext'

import {
  incrementCounter,
  decrementCounter
} from '../redux/counter/actions'

import {
  toggleTodo
} from '../redux/todos/actions'


const mapStateToProps = (state) => ({
  counter: state.counterReducer.count,
  todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
  toggleTodo: id => dispatch(toggleTodo(id))
})

class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <Card className="mt-3" title="Test for redux">
          Counter: <span>{this.props.counter}</span>
          <span className="mx-3">
            <button onClick={ this.props.decrement }>-</button>
            <button onClick={ this.props.increment }>+</button>
          </span>
        </Card>
        <Card className="mt-3" title="Test for Redux to do example">
        <div>
          <AddTodo />
          <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
        </div>
        </Card>
        <Card className="mt-3" title="Test for global value and fuction from Context">
          <MyButton />
          <AppContext.Consumer>
            {context =>(
              <Button className="mt-1">context value: {context.buttonText}</Button>
            )}
          </AppContext.Consumer>
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
