class App extends React.Component {
  state = {
    s1: Math.floor(Math.random() * 3) + 1,
    s2: Math.floor(Math.random() * 3) + 1,
    s3: Math.floor(Math.random() * 3) + 1
  };

  tryAgain = () => {
    this.setState({
      s1: Math.floor(Math.random() * 3) + 1,
      s2: Math.floor(Math.random() * 3) + 1,
      s3: Math.floor(Math.random() * 3) + 1
    });
  };
  render() {
    const { s1, s2, s3 } = this.state;
    return (
      <div>
        <SlotMachines getSymbol={[s1, s2, s3]} />
        <button onClick={this.tryAgain}>Go</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
