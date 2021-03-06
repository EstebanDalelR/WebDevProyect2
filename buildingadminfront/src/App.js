import React, { Component } from 'react';
import Tenants from './Tenants.js';
import BuildingInfo from './BuildingInfo.js';
import Workers from './Workers.js';
import WorkersInfo from './WorkersInfo.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      tenants:[
      ]
    };
  }

  componentDidMount(){
    fetch('/tenants',{method:'GET',
     headers:{accept:'application/json'}})
    .then((res)=>{
      if(res.ok)
        return res.json();
    })
    .then((tenants) =>{
      this.setState({
        tenants:tenants
      });
    })
  }

  render() {
    return (
      <div =>

        <h2>
          Edificio Nueva Era
        </h2>
        <Tenants tenants={this.state.tenants}/>
        <BuildingInfo tenants={this.state.tenants}/>
        <Workers workers={this.state.tenants} />
        <WorkersInfo tenants={this.state.tenants}/>
      </div>
    );
  }
}

export default App;
