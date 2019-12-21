import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    /*state = { count: 0 };

    up = () => {
        this.setState({
            count: ++this.state.count
        });
    };

    down = () => {
        this.setState({
            count: --this.state.count
        });
    };*/

    render() {
        return (<div >
            Count: {this.props.count}
            <div >
                <button onClick={this.props.increamentBy1}>UP</button>
                <button onClick={this.props.decrementBy1}>DOWN</button>
            </div>
        </div>);
    };
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increamentBy1: () => {
            dispatch({
                type: 'UP'
            })
        },
        decrementBy1: () => {
            dispatch({
                type: 'DOWN'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);