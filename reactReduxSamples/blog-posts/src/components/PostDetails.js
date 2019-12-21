import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class PostDetails extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.post.userId);
    };

    render() {
        if (!this.props.user) {
            return null;
        }
        return (
            <div className="ui segment">
                <div >User ID: {this.props.post.userId}</div>
                <div >User Name: {this.props.user.name}</div>
                <div >Title: {this.props.post.title}</div>
                <div >Content: {this.props.post.body}</div>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find((user) => {
        return user.id === ownProps.post.userId;
    });
    return {
        users: state.users,
        user: user
    };
};

const mapActionToProps = () => {
    return {
        getUsers: getUsers
    };
};

export default connect(mapStateToProps, mapActionToProps())(PostDetails);