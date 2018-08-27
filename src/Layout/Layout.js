import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { getRouteData } from '../Routes/RootRoute';

class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          this is Layout logic
        </div>
        <Switch>
          {
            getRouteData().map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                />
              );
            })
          }
        </Switch>
      </div>
    );
  }
}

export default Layout;