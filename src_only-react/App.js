import React, { Component } from 'react'

export default class App extends Component {
  state={count:0}
  increment=()=>{
    const {select_number}=this.refs
    const {count}=this.state
    this.setState({count:count+select_number.value*1})
  }
  decrement=()=>{
    const {select_number}=this.refs
    const {count}=this.state
    this.setState({count:count-select_number.value*1})
  }
  incrementIfOdd=()=>{
    const {select_number}=this.refs
    const {count}=this.state
    if(count%2===1){
      this.setState({count:count+select_number.value*1})
    }
  }
  incrementAsync=()=>{
    const {select_number}=this.refs
    const {count}=this.state
    setTimeout(()=>{
      this.setState({count:count+select_number.value*1})
    },500)
  }
  render() {
    return (
      <div>
        <span>count is {this.state.count}</span><br/>&nbsp;
        <select ref='select_number'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

