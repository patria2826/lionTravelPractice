class NumPicker extends React.Component {
  getNum = () => {
    return Math.floor(Math.random() * 10 + 1);
  };
  render() {
    const num = this.getNum();
    return (
      <div>
        <h1>Your number is {num}</h1>
        <h2>{num === 7 ? "Congrats!" : "Unlucky!"}</h2>
        {num === 7 && (
          <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/source.gif" />
        )}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
