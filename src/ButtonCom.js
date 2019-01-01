import React, { Component } from 'react';
import Tx from './Tx';
class ButtonCom extends Component {
 
  disFun(){
   
  alert("abc");
     
 
  }
  render() {
    return (
      <div className="ButtonCom">
       <button onClick={this.disFun}>Button</button>
       
      </div>
      
      
 
    );
  }
}

export default ButtonCom;
