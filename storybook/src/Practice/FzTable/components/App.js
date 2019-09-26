import React, { Component } from 'react';
import Table from './Table';
import data from './tripData.json';

class App extends Component {
    state = {
        data: null
    }

    // componentDidMount() {
    //     fetch('./tripData.json', {
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     }).then((response) => {
    //         return response.json();
    //     }).then((responseData) => {
    //         this.setState({ data: responseData });
    //         return responseData;
    //     })
    // }

    render() {
        return (
            <div className="fztable">
                <Table
                    tripData={data}
                    // tripData={this.state.data}
                    count={{ slide: 10, show: 3 }}
                    speed={0.3}
                    whenClick={(element) => { console.log(element.target.innerHTML) }}
                />
            </div>
        )
    }
}
export default App;