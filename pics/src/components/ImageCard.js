import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imgRef = React.createRef();
    }
    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        console.log(this);
        console.log(this.imgRef.current);  //returns the html dom(which is img in this case)
        const imgHeight = this.imgRef.current.clientHeight;
        const spans = Math.ceil(imgHeight / 11);
        this.setState({ spans });
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img alt={description} src={urls.regular} ref={this.imgRef} />
            </div>
        )
    }
}
export default ImageCard;