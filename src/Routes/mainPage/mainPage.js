import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GETTOKEN } from 'root/Actions/Actions';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

class mainPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: GETTOKEN
    });
  }

  render() {
    return (
      <div>
        this is main Page
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(mainPage);