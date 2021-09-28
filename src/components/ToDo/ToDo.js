import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';
import ListView from "../ListView/ListView";
import axios from "axios";

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            lists: [],
        }
    }


    logged = () => {
        this.props.logged();
    }

    toggleListView = () => {
        this.props.toggleListView();
    }

    componentDidMount() {
        axios.get('https://recruitment.ultimate.systems/to-do-lists', {
            headers: {
              'Authorization': 'Bearer siema'
            }
          })
        .then(response => {
            console.log(response)
            this.setState({lists: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    /*const searchList = (rows) => {
        return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1);
    }*/
    render() {
      const {lists} = this.state;

        return(
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <input placeholder="Search" className="searchInput" />
                <div className="mainBody">
                    <div className="lists">
                        {lists.map((list) => (<div className="list" onClick={this.toggleListView}>
                            <h3>{list.name}</h3>
                            <p> created today</p>
                            <p> {list.task.length} completed/{list.task.length} all</p>
                        </div>))}

                        <div className="list" onClick={this.toggleListView}>
                            <h3>xx</h3>
                            <p> created today</p>
                            <p> xx completed/xx all</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
 }
}
 export default ToDo;