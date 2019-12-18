import React from 'react';
import { connect } from 'react-redux';
import { activateGodMode, deactivateGodMode } from './_redux';

export class App extends React.Component {

    render() {
        debugger;
        return <div >
            <div ><h1 >{this.props.greetText || 'Hello World'}</h1></div>
            <button
                onClick={() => { this.props.activateGodMode('Activated god mode') }}
            >
                Exit me!!!
            </button>

            <button
                onClick={() => { this.props.deactivateGodMode('DEactivated god mode') }}
            >
                Activate me!!!
            </button>
        </div>
    };
}

const mapStateToProps = (state) => {
    return { greetText: state.greetText }
};

const mapDispatchToProps = {
    activateGodMode: activateGodMode,
    deactivateGodMode: deactivateGodMode
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;