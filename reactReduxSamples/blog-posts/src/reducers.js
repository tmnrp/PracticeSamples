import { combineReducers } from 'redux';

const postReducers = (posts = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return posts;
};

const usersReducers = (users = [], action) => {
    if (action.type === 'GET_USERS') {
        return [...users, action.payload];
    }
    return users;
};

export default combineReducers({
    users: usersReducers,
    posts: postReducers
});