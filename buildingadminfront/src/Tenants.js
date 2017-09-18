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

  renderMonths(){
    const tenants = this.props.tenants;
    const listItems = tenants.map((tenant, index) =>
       <b key={index} >{tenant.payments[index].month+'/'+tenant.payments[index].year+" "}</b>
    );
    return (
      <th>{listItems}</th>
    );
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr className='TableTittle'>
              <th>Apto</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              {this.renderMonths()}
            </tr>
            {this.renderTenants()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tenants;
