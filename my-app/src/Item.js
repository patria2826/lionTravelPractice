import React, { Component } from 'react';

class Item extends Component {
    state = {
        title: 'Title',
        text: 'Hello World',
        count: 0,
    }
    sayHi = () => {
        this.setState({ text: 'Hi~' });
    }
    addCount = () => {
        // 直接寫n次 this.setState 也不會+n，因為setState是非同步，無法保證第二次執行時可以拿到第一次執行完之後的值
        this.setState(
            // (state) => {
            //     return {
            //         count: state.count + 1,
            //     }
            // }
            // 上方語法 = 下方語法
            (state) => ({ count: state.count + 1 })
        );
        this.setState((state) => ({ count: state.count + 1 }), this.storeCount);
        this.setState((state) => ({ count: state.count + 1 }), () => { this.storeCount() });
    }
    storeCount = () => {
        fetch(`/api/count?value=${this.state.count}`);
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <li>{this.state.title}</li>
                <li>{this.state.text}</li>
                <li>{this.props.text} {this.props.price + 100}</li>
                <li>{this.props.children}</li>
                <button onClick={this.sayHi}>Say Hello</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>ADD</button>
            </div>
        )
    }
}

export default Item;