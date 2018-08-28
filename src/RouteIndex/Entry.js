import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { browserHistory, Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Store from '../Store/Store';
import Layout from '../Layout/Layout';

class Entry extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router
          history={browserHistory}
        >
          <Switch>
            <Route path="/" exact component={Layout}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Entry;