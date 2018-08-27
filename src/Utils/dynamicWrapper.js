import React, { Component } from 'react';

export function dynamic(component) {
  return class dynamicWrapper extends Component {
    state = {
      LoadedComp: null
    }

    componentDidMount() {
      if (typeof component === 'function') {
        component()
          .then(res => res.default)
          .then((component) => {
            this.setState({
              LoadedComp: component
            });
          }).catch((error) => {
            console.error(error);
          })
      }
    }

    render() {
      const { LoadedComp } = this.state;
      return LoadedComp ? <LoadedComp /> : (<span>Loading...</span>);
    }
  }
}