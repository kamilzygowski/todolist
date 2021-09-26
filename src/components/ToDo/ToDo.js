import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';
import ListView from "../ListView/ListView";

const ToDo = (props) => {


    const logged = () => {
        props.logged();
    }

    const toggleListView = () => {
        props.toggleListView();
    }   

        const [list, setItems] = useState([{
            name: "XDDD",
            task: [
                {
                taskName : "task1",
                isDone : false,
                }
            ]
        }])

        const [inputValue] = useState("");

        return(
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={logged} />
                <input placeholder="Search" className="searchInput" />
                <div className="mainBody">
                    <div className="lists">
                        {list.map((list) => (<div className="list" onClick={toggleListView}>
                            <h3>{list.name}</h3>
                            <p> created today</p>
                            <p> {list.task.length} completed/{list.task.length} all</p>
                        </div>))}
                        
                    </div>
                </div>
            </div>
        );
 }
 export default ToDo;