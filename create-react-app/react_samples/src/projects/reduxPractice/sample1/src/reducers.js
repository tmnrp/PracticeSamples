import { combineReducers } from 'redux';

const getSongsListReducer = () => {
    return [{
        name: 'No Scrubs',
        duration: '3:03'
    }, {
        name: 'Sayonee',
        duration: '4:03'
    }, {
        name: 'Waiting for the end to come',
        duration: '5:03'
    }];
};

const selectSongReducer = (song = {}, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return song;
};

export default combineReducers({
    getSongsList: getSongsListReducer,
    selectSong: selectSongReducer
});