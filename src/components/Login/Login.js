import React from 'react';
import './Login.css';
import axios from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';

const accesToken = 'siema';
const apiUrl = 'https://recruitment.ultimate.systems';

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accesToken}`
  }
})

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      identifier:"",
      password:"",
    }
  }

  componentDidMount() {

    const postLogin = authAxios.post(`/auth/local`, this.state)
    .then(response => {
      console.log(response)
      console.log(postLogin)
    })
    .catch(error => {
      console.log(error)
      console.log(':(')
    })
  }
  
  

    toggle = () => {
        this.props.toggle();
    }

    logged = () => {
      this.componentDidMount()
        this.props.logged()
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }


    render(){
        const {identifier, password} = this.state;
  return (
    <div className="Login" ref={this.props.containerRef}>
      <div className="window">
          <h1 className="loginHeader">Login</h1>
          <input className="username" name="identifier" placeholder="E-mail or Username" value={identifier} onChange={this.changeHandler}></input>
          <input type="password" className="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}></input>
          <button className="loginBtn" onClick={this.logged}>Login</button>
          <p className="smallOr"> or </p>
          <a className="createAccount" ref={this.props.containerRef} onClick={this.toggle}> create an account </a>
      </div>
    </div>
  );
  }
}

export default Login;