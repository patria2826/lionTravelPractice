import React, { Component, createRef } from 'react'

class Input extends Component {
    // 寫法1
    setInputRefff = (inputt) => {
        inputt.focus();
    }
    // 寫法2
    set2ndRef = createRef();
    componentDidMount() {
        console.log(this.set2ndRef.current);
    }
    render() {
        return (
            <div>
                <h3>Enter Your Name</h3>
                <input type='text' ref={this.setInputRefff}></input>
                <br></br>
                <button ref={this.set2ndRef}>Push</button>
            </div>
        )
    }
}
export default Input;