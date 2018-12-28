// // Greeter.js
// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };

//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      // <div >
      <div className={styles.root}> 
       <span className="cybl">{config.greetText}</span> 
      </div>
    );
  }
}

export default Greeter