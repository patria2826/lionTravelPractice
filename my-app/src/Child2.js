import React, { Component, } from 'react'

class Child2 extends Component {
    render() {
        const {count, parentAddCount, child2AddCount} = this.props;
        return (
            <div>
                <h1>2st Child</h1>
                <h3>{count}</h3>
                <button onClick={parentAddCount}>+Parent</button>
                <button onClick={child2AddCount}>+Children</button>
            </div>
        )
    }
}
export default  Child2;