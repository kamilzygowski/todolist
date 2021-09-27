import React from 'react';
import './Login.css';
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      local:[],
    }
  }

  componentDidMount() {
    axios.get('http://recruitment.ultimate.systems', {
      headers: {
        'Authorization': 'Bearer siema'
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  

    toggle = () => {
        this.props.toggle();
    }

    logged = () => {
        this.props.logged();
    }


    render(){
        
  return (
    <div className="Login" ref={this.props.containerRef}>
      <div className="window">
          <h1 className="loginHeader">Login</h1>
          <input className="username" placeholder="E-mail or Username"></input>
          <input type="password" className="password" placeholder="Password"></input>
          <button className="loginBtn" onClick={this.logged}>Login</button>
          <p className="smallOr"> or </p>
          <a className="createAccount" ref={this.props.containerRef} onClick={this.toggle}> create an account </a>
      </div>
    </div>
  );
  }
}

export default Login;