import { combineReducers } from 'redux';

const postsReducer = (posts = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return posts;
};

export default combineReducers({
    // set all posts
    posts: postsReducer
});