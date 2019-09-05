import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
    state = { lat: null, errMsg: '' };  //等於在concstruction中定義this.state
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // callback
            (position) => { this.setState({ lat: position.coords.latitude }); },
            // failure callback
            (err) => { this.setState({ errMsg: err.message }); }
        );
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    renderContent() {
        //為了提升可維護性，盡量不要在render中進行條件判斷，所以把條件判斷的部分包到另一個function中
        if (this.state.lat && !this.state.errMsg) {
            return <SeasonDisplay lat={this.state.lat} />
        } else if (!this.state.lat && this.state.errMsg) {
        }
        return <Spinner msg="Please accept location request" />
        // return <Spinner />
    }
    render() {
        console.log('render');
        return (
            <div>{this.renderContent()}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)