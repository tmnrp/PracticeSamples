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
            {this.props.count}
            <div >
                <button onClick={this.props.up}>UP</button>
                <button onClick={this.props.down}>DOWN</button>
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
        up: () => {
            dispatch({
                type: 'UP'
            })
        },
        down: () => {
            dispatch({
                type: 'DOWN'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);