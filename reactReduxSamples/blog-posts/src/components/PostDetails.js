import React from 'react';

class PostDetails extends React.Component {
    render() {
        console.log('details:');
        return (
            <div className="ui segment">
                <div >User ID: {this.props.post.userId}</div>
                <div >Title: {this.props.post.title}</div>
                <div >Content: {this.props.post.body}</div>
            </div>
        );
    };
}

export default PostDetails;