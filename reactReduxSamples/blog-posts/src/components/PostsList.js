import React from 'react';
import { connect } from 'react-redux';

import { setPosts } from '../actions';
import { jsonPlaceHolderAxios } from '../api';

import PostDetails from './PostDetails';


class PostsList extends React.Component {

    componentDidMount = () => {
        jsonPlaceHolderAxios.get('/posts', {}).then((response) => {
            this.props.setPosts(response.data);
        });
    };

    render() {
        console.log(this.props);
        return (
            <div >
                <div >Post list:</div>
                <div className="ui segment">
                    {this.props.posts.map((post) => {
                        return (
                            <PostDetails key={post.id} post={post} />
                        );
                    })}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

const mapActionToProps = () => {
    return {
        setPosts: setPosts
    };
};

export default connect(mapStateToProps, mapActionToProps())(PostsList);