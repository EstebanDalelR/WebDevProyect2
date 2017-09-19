import React, { Component } from 'react';

class WorkersInfo extends Component {
  constructor(props) {
    super (props);
  }

  addEarnings(){


    return (
      <b>0</b>
    );
  }

  render() {
    return (
      <div>
        <p>Este mes se ha pagado: </p>
        {this.addEarnings()}
        <p>Hay problemas con los papeles de: </p>
        {this.addEarnings()}
      </div>
    );
  }
}

export default WorkersInfo;
