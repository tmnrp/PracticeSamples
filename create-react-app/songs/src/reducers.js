import { combineReducers } from 'redux';

const getSongsListReducer = () => {
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

const selectedSongReducer = (selectedSong = {}, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
};

const countReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT') {
        return ++action.payload;
    } else if (action.type === 'DECREMENT') {
        return --action.payload;
    }
    return count;
};

export default combineReducers({
    //songList props
    getSongsList: getSongsListReducer,
    selectedSong: selectedSongReducer,

    // IncreDecre props
    count: countReducer
});