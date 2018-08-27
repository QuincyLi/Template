import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class mainPage extends Component {
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