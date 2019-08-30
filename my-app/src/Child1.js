import React, { Component, } from 'react'

class Child1 extends Component {
    state = {
        count: 0,
    }
    addCountC = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <div>
                <h1>1st Child</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.props.addParentCount}>+Parent</button>
                <button onClick={this.addCountC}>+Children</button>
            </div>
        )
    }
}
export default  Child1;