// action creator.
export const selectSong = (song) => {
    return {
        type: 'SELECTED_SONG',
        payload: song.payload
    };
};