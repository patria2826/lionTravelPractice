import React from "react";
import { connect } from "react-redux";
import { stat } from "fs";
import State from "../interfaces/State";
import Song from "../interfaces/Song";

const SongList = (props: any) => {
  console.log(props);

  const renderList = () => {
    return props.songs.map((song: Song, index: number) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

// Any time the store is updated, mapStateToProps will be called.
// If you declared two params, mapStateToProps will be called whenever the store state changes or when the wrapper component receives new props.
const mapStateToProps = (state: State, ownProps?: object): object => {
  return { songs: state.songs };
};

// Tell connect that we want to get a list of songs out of redux store from the provider.
export default connect(mapStateToProps)(SongList);

function myFunction() {
  let sth: string = "Hi there!";
  return function(sth2: string) {
    console.log(sth + sth2);
  };
}

myFunction(); //returns a function
myFunction()(" Bye."); //fires the returned function
