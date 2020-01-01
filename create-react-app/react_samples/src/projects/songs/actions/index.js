// Action creator
export const selectSong = (song) => {
    // return action
    return {
        type: 'SELECT_SONG',
        payload: song
    };
};