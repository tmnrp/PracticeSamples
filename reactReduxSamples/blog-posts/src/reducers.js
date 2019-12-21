import { combineReducers } from 'redux';

const setPostsReducer = (posts = [], action) => {
    if (action.type === 'SET_POSTS') {
        return action.payload;
    }
    return posts;
};

export default combineReducers({
    // set all posts
    posts: setPostsReducer
});