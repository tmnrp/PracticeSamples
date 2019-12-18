
const getSelectedSong = (selectedSong = {}, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }
    return selectedSong;
};
