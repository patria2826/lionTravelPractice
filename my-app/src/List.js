import React, { Component } from 'react';
import Item from './Item';
import Input from './Input';
import Parent from './Parent';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <Item text='AAA' price={100} />
                    <Item text='BBB' price="{100}" />
                    <Item>CCC</Item>
                </ol>
                <hr></hr>
                <Input />
                <hr></hr>
                <Parent />
                <hr></hr>
            </div>
        )
    }
}

export default List;