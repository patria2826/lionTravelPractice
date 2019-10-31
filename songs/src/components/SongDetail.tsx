import React from "react";
import { connect } from "react-redux";
import State from "../interfaces/State";

const SongDetail = (props: any) => {
  const { mySelectedSong } = props;
  return (
    <div>
      <h1>Song Detail</h1>
      <h3>{!mySelectedSong && "Select a song."}</h3>
      <h3>{mySelectedSong && mySelectedSong.title}</h3>
      <h4>{mySelectedSong && mySelectedSong.duration}</h4>
    </div>
  );
};

const mapStateToProps = (state: State): object => {
  //   console.log(state);
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
