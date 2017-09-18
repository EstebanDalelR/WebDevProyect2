import React, { Component } from 'react';

class Worker extends Component {
  constructor(props) {
    super (props);
  }

  renderPayments(){
    const payments = this.props.tenant.payments;
    const listItems = payments.map((payment, index) =>
       <b key={index} style={{color: payment.paid ? 'green' : 'red'}}>{payment.amount+" "}</b>
    );
    return (
      <td>{listItems}</td>
    );
  }


  render() {
    return (
      <tr>
        <td className="aptNumber">{this.props.tenant.number}</td>
        <td className="tenantName">{this.props.tenant.tenants[0].name}</td>
        <td className="tenantPhone">{this.props.tenant.tenants[0].cel}</td>
        <td className="tenantPhone">{this.props.tenant.tenants[0].email}</td>
        {this.renderPayments()}
      </tr>
    );
  }
}

export default Worker;
