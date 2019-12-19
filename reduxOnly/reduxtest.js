const { createStore } = require('redux');

const initialState = {
    age: 20
};

const myReducer = (state = initialState, action) => {
    const newState = { ...state };

    if (action.type === 'ADD') {
        newState.age += action.payload.val;
    }
    return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: {
        val: 5
    }
});