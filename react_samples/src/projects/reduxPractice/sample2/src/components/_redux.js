import { combineReducers, createStore } from 'redux';

// actions
export const activateGodMode = (greetText) => {
    return {
        type: 'GODMODE',
        greetText: greetText
    };
};

export const deactivateGodMode = (greetText) => {
    return {
        type: 'GENERAL',
        greetText: greetText
    };
};

// reducers
export const godModeReducer = (state = {}, action) => {
    if (action.type === 'GODMODE') {
        return action.greetText;
    }
    return state;
};
export const generalModeReducer = (state = {}, action) => {
    if (action.type === 'GENERAL') {
        return action.greetText;
    }
    return state;
};

export const _reducer = combineReducers({
    godMode: godModeReducer,
    generalMode: generalModeReducer
});

export const configureStore = (initialState = {}) => {
    return createStore(_reducer, initialState);
};

export const _store = configureStore();