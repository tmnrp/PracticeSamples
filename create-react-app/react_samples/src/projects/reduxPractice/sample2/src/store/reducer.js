const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === 'UP') {
        return {
            count: ++state.count
        };
    } else if (action.type === 'DOWN') {
        return {
            count: --state.count
        };
    }
    return state;
};

export default reducer;