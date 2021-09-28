import React from "react";
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const accesToken = 'siema';
const apiUrl = 'https://recruitment.ultimate.systems';

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accesToken}`
  }
})

class Register extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           username:"", 
           email: "", 
           password: ""
        }
    }
    

    toggle = () => {
        this.props.toggle();
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        let loadout = authAxios.post(`/auth/local/register`, this.state)
            .then(response => {
                console.log(response.config.data)
                console.log(loadout)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const {username, email, password, check} = this.state
        return(
            <div className="register" ref={this.props.containerRef}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} onClick={this.toggle} className="back" />
                <h1 className="registerHeader"> Create a new account </h1>
                <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Username" name="username" className="inputs" value={username} onChange={this.changeHandler}/>
                <input type="email" placeholder="E-mail" name="email"  className="inputs" value={email} onChange={this.changeHandler}/>
                <input type="password" placeholder="Password" name="password"  className="inputs" value={password} onChange={this.changeHandler}/>
                <input type="password" placeholder="Repeat password" name="password"  className="inputs" value={check} onChange={this.changeHandler}/>
                <button type="submit" className="createBtn"> Create </button>
                </form>
            </div>
        );
    }
} 
export default Register;