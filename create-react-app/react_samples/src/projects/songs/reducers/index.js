import { combineReducers } from 'redux';

const songReducer = () => {
    return [{
        title: 'So Scrubs',
        duration: '1:40'
    }, {
        title: 'I want it that way',
        duration: '2:40'
    }, {
        title: 'Macarena',
        duration: '3:40'
    }];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});