import React, { Component } from 'react';
import Tenant from './Tenant.js';
import Month from './Month.js';

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
        <table>
          <tbody>
            <tr>
              <th>Apto</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
            </tr>
            {this.renderTenants()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tenants;
