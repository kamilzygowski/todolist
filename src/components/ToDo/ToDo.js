import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';

class ToDo extends React.Component{

    logged = () => {
        this.props.logged();
    }

    render(){
        return(
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <div className="mainBody">
                    <input placeholder="Search" className="searchInput" />
                    <div className="lists">
                        <div className="list">
                            <h3>ToDo list name</h3>
                            <p> created today</p>
                            <p> completed:10, all:25</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default ToDo;