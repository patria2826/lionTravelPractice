import { combineReducers } from 'redux';

const songsListReducer = () => {
    return [
        { title: "Parade's Lust", duration: '4:33' },
        { title: "Ain Soph Aur", duration: '4:19' },
        { title: "カロの歌", duration: '1:32' },
        { title: "どうして空は蒼いのか", duration: '6:11' },
        { title: "人魚の歌", duration: '1:34' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer
})