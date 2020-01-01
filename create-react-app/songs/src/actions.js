// action creator
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    };
};

// action creator
export const incrementCount = (val) => {
    return {
        type: 'INCREMENT',
        payload: val
    };
};

export const decrementCount = (val) => {
    return {
        type: 'DECREMENT',
        payload: val
    };
};
