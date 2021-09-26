import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';
import ListView from "../ListView/ListView";

class ToDo extends React.Component{


    logged = () => {
        this.props.logged();
    }

    toggleListView = () => {
        this.props.toggleListView();
    }

    

    render(){
        return(
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <input placeholder="Search" className="searchInput" />
                <div className="mainBody">
                    <div className="lists">
                        <div className="list" onClick={this.toggleListView}>
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