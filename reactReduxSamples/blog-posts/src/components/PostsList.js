import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import PostDetails from './PostDetails';

class PostsList extends React.Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    };

    render() {
        return (
            <div >
                <div >Post list:</div>
                <div className="ui segment">
                    {this.props.posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <PostDetails post={post} />
                            </div>
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
        fetchPosts: fetchPosts
    };
};

export default connect(mapStateToProps, mapActionToProps())(PostsList);