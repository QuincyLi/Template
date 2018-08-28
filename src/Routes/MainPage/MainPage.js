import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from './mapStateToProps'
import { mapDispatchToProps } from './mapDispatchToProps'

class mainPage extends Component {
  componentDidMount() {
    this.props.getToken();
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
  mapDispatchToProps
)(mainPage);