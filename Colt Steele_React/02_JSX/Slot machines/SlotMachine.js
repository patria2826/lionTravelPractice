class SlotMachines extends React.Component {
  render() {
    const slots = this.props.getSymbol;
    const style = {
      width: "40px",
      display: "inline-block",
      border: "1px solid black",
      textAlign: "center",
      fontSize: "25pt"
    };
    const result = slots[0] === slots[1] && slots[1] === slots[2];
    return (
      <div className="Machine">
        <h1>Slot Machines</h1>
        <div className={"win-" + result}>
          {slots.map((slot, i) => {
            return (
              <span key={i} style={style}>
                {slot}
              </span>
            );
          })}
        </div>
        <h3>{result ? "You Won!!" : "Try again...."}</h3>
      </div>
    );
  }
}
