import { combineReducers } from "redux";
import Action from "../interfaces/Action";
import Song from "../interfaces/Song";

export const songsReducer = () => {
  return [
    {
      title: "Nascence",
      duration: "01:46"
    },
    {
      title: "The Call",
      duration: "03:38"
    },
    {
      title: "First Confluence",
      duration: "01:40"
    },
    {
      title: "Second Confluence",
      duration: "02:19"
    },
    {
      title: "Threshold",
      duration: "06:04"
    },
    {
      title: "Third Confluence",
      duration: "01:39"
    },
    {
      title: "The Road of Trials",
      duration: "04:16"
    },
    {
      title: "Fourth Confluence",
      duration: "01:06"
    },
    {
      title: "Templations",
      duration: "04:13"
    },
    {
      title: "Descent",
      duration: "02:40"
    },
    {
      title: "Fifth Confluence",
      duration: "01:22"
    },
    {
      title: "Atonement",
      duration: "06:10"
    },
    {
      title: "Final Confluence",
      duration: "02:06"
    },
    {
      title: "The Crossing",
      duration: "01:57"
    },
    {
      title: "Reclamation",
      duration: "02:16"
    },
    {
      title: "Nadir",
      duration: "03:36"
    },
    {
      title: "Apotheosis",
      duration: "07:06"
    },
    {
      title: "I Was Born For This",
      duration: "04:40"
    }
  ];
};

const selectedSongReducer = (
  selectedSong: Song | null = null,
  action: Action
) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  // the keys of this obj are going to be the keys that show up inside of our state obj
  songs: songsReducer,
  seletedSong: selectedSongReducer
});
