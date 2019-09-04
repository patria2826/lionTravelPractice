import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errMsg: '' };

        window.navigator.geolocation.getCurrentPosition(
            // callback
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            // failure callback
            (err) => {
                this.setState({ errMsg: err.message });
            }
        );
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        let msg;
        if (this.state.lat && !this.state.errMsg) {
            msg = this.state.lat;
        } else if (!this.state.lat && this.state.errMsg) {
            msg = this.state.errMsg;
        } else { msg = "Loading"; }
        return (
            <div>Latitude:  {msg}</div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)