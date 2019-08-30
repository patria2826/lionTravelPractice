import React, { Component, createRef } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends Component {
    childrenRef = createRef();
    state = {
        count: 0,
        child2Count: 0,
    }
    addCountP = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
    addChildCount = () => {
        this.childrenRef.current.addCountC();
    }
    addChild2Count = () => {
        this.setState({
            child2Count: this.state.child2Count + 1,
        })
    }
    render() {
        return (
            <div>
                <h1>Parent</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.addCountP}>+Parent</button>
                <button onClick={this.addChildCount}>+Children</button>
                <Child1 ref={this.childrenRef} addParentCount={this.addCountP} />
                <Child2 count={this.state.child2Count} child2AddCount={this.addChild2Count} parentAddCount={this.addCountP}/>
            </div>
        )
    }
}
export default Parent;