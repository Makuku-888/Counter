// import React from 'react'
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : props.num}
    }
// state={
//     counter:0
// }
handleIncrease = () => {
    this.setState({
        count: this.state.count + 1 
    })
}

handleDecrease = () => {
    this.setState({
        count: this.state.count - 1 
    })
}


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default Counter