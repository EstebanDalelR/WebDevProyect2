import React, { Component } from 'react';

class BuildingInfo extends Component {
  constructor(props) {
    super (props);
  }
render() {
    return (
      <div>
        <p>Este mes se ha recolectado: </p>
        <b>0</b>
      </div>
    );
  }
}

export default BuildingInfo;
