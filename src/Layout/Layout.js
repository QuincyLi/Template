import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { mapStateToProps } from './mapStateToProps'
import { mapDispatchToProps } from './mapDispatchToProps'

import { getRouteData } from '../Routes/RootRoute';

@connect(mapStateToProps, mapDispatchToProps)
class Layout extends PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: '#e4e8f1', height: '100%' }}>
        <div>
          this is Layout logic
        </div>
        <Switch>
          {
            getRouteData().map((item) => {
              const AsyncComponet = item.component
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  render={() => <AsyncComponet />}
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