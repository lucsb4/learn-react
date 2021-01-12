import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return(
      <h1>
        Welcome {this.props.name} aka {this.props.heroName}
      </h1>
    )
  }
}

export default Welcome;

// Props gets passed to the component
// State is managed within the component
// Props are immutable, state can be changed