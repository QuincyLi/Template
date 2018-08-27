import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Store from '../Store/Store';

class Entry extends Component {
  render(){
    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Entry;