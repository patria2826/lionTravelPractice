import React, { Component, PureComponent } from 'react';
import ProgressBar from './ProgressBar';

// Class Component
class Progress extends Component {
    state = {
        counter: 0,
    }
    addCount = () => {
        this.setState({
            counter: this.state.counter + 5,
        })
    }
    render() {
        const { count } = this.state;
        console.log(count);
        return (
            <div>
                <ProgressBar count={count} />
                <button onClick={this.addCount}>ADD</button>
            </div>
        )
    }
}

// Stateless Functional Component
// const Progress = (props) => {
//     const { count } = props;
//     console.log(count);
//     return (
//         <div>
//             <ProgressBar count={count} />
//             <button onClick={this.addCount}>ADD</button>
//         </div>
//     )

// }

// PureComponent
// class Progress extends PureComponent {
//     state = {
//         counter: 0,
//     }
//     addCount = () => {
//         this.setState({
//             counter: this.state.counter + 5,
//         })
//     }
//     render() {
//         const {count} = this.state;
//         console.log(count);
//         return (
//             <div>
//                 <ProgressBar count={count}/>
//                 <button onClick={this.addCount}>ADD</button>
//             </div>
//         )
//     }
// }
export default Progress;