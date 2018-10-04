import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './actions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type='button' value='TriggerAction' onClick={this.props.onTriggerAction}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.testReducer.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTriggerAction: () => {
      dispatch({ type: actions.triggerAction })
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
