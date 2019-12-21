import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class PostDetails extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.post.userId);
    };

    render() {
        const user = this.props.users.find((user) => {
            return user.id === this.props.post.userId;
        });
        const userName = user ? user.name : 'Loading...';
        return (
            <div className="ui segment">
                <div >User ID: {this.props.post.userId}</div>
                <div >User Name: {userName}</div>
                <div >Title: {this.props.post.title}</div>
                <div >Content: {this.props.post.body}</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapActionToProps = () => {
    return {
        getUsers: getUsers
    };
};

export default connect(mapStateToProps, mapActionToProps())(PostDetails);