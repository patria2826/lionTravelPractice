import React, { Component } from 'react'

class Input extends Component {
    componentDidMount(){
        this.myInput.focus();
    }
    setInputRefff = (input) => {
        this.myInput = input;
    }
    render() {
        return (
            <div>
                <h3>Enter Your Name</h3>
                <input type='text' ref={this.setInputRefff}></input>
            </div>
        )
    }
}
export default Input;