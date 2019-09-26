import React, { Component } from 'react';

interface ButtonConfig {
    btnName: string,
    toggle: () => void,
    btnText: string
}

class Button extends Component<ButtonConfig> {
    render() {
        const { btnName, toggle, btnText } = this.props;
        return (
            <div className={btnName} onClick={toggle}>
                {btnText}
            </div>
        )
    }
}
export default Button;