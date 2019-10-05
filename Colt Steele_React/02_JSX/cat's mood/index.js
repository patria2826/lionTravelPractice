class JSXDemo extends React.Component {
  getMood = () => {
    const moods = ["Mad", "Hungry", "Silly", "Quiet", "Paranoid"];
    return moods[Math.floor(Math.random() * moods.length)];
  };

  render() {
    return (
      <div>
        <h1>Cat is {this.getMood()}</h1>
        <img src="https://resize.hswstatic.com/w_907/gif/tesla-cat.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
