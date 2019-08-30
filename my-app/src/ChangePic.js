import React, { Component } from 'react';
import rabbit from './imgs/rabbit.gif';
import './css/imgCss.css';

class ChangePic extends Component {
    state = {
        visible: true,
    }
    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }
    render() {
        const { visible } = this.state; //名稱要跟state裡面一樣
        const styleObj = { display: visible ? 'block' : 'none' };
        const myClass = visible ? '' : 'hide';
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <br></br>
                <br></br>
                {visible ? <img src={rabbit} alt='AKAM' /> : null}
                <br></br>
                {visible && <img src={rabbit} alt='AKAM' />}
                <img src={rabbit} alt='AKAM' style={styleObj} />  {/* 此處的style是物件 */}
                <img src={rabbit} alt='AKAM' className={myClass} />
            </div>
        )
    }
}
export default ChangePic;