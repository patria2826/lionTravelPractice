// Action Creator
export const selectSong = (song: any): { type: string; payload: any } => {
  // return an action
  return {
    type: "SONG_SELECTED", //required
    payload: song
  };
};
