import React from "react";
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

class Register extends React.Component {

    toggle = () => {
        this.props.toggle();
    }

    render(){
        return(
            <div className="register" ref={this.props.containerRef}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} onClick={this.toggle} className="back" />
                <h1 className="registerHeader"> Create a new account </h1>
                <input type="text" placeholder="Username" className="inputs"/>
                <input type="email" placeholder="E-mail" className="inputs"/>
                <input type="password" placeholder="Password" className="inputs"/>
                <input type="password" placeholder="Repeat password" className="inputs"/>
                <button className="createBtn"> Create </button>
            </div>
        );
    }
} 
export default Register;