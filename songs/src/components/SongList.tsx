import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import State from "../interfaces/State";
import Song from "../interfaces/Song";

const songSelectedStyle = (song: Song, selectedSong: Song): object => {
  if (selectedSong && song.title == selectedSong.title) {
    return { background: "#000", color: "#fff", height: "43px" };
  }
  return {};
};
const displayBtn = (song: Song, selectedSong: Song): object => {
  if (selectedSong && song.title == selectedSong.title) {
    return { display: "none" };
  }
  return {};
};

const SongList = (props: any) => {
  console.log(`props: `, props);
  const { selectedSong, songs } = props;

  const renderList = () => {
    return songs.map((song: Song, index: number) => {
      return (
        <div
          className="item"
          key={index}
          style={songSelectedStyle(song, selectedSong)}
        >
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
              style={displayBtn(song, selectedSong)}
            >
              Select
            </button>
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
  console.log("state", state);
  return { selectedSong: state.selectedSong, songs: state.songs };
};

// Tell connect that we want to get a list of songs out of redux store from the provider.
// connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
export default connect(
  // mapStateToProps
  mapStateToProps,

  // mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
  { selectSong }

  // mergeProps

  //options
)(SongList);

function myFunction() {
  let sth: string = "Hi there!";
  return function(sth2: string) {
    console.log(sth + sth2);
  };
}

myFunction(); //returns a function
myFunction()(" Bye."); //fires the returned function
