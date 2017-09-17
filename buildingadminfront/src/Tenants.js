import React, { Component } from 'react';
import Tenant from './Tenant.js';

class Tenants extends Component {
  constructor(props) {
    super (props);
  }

  renderTenants(){
    return this.props.tenants.map(
      (t,i)=>{
      return <Tenant tenant={t} key={i}/>;
      }
    );
  }
  render() {
    return (
      <div>
        {this.renderTenants()}
      </div>
    );
  }
}

export default Tenants;
