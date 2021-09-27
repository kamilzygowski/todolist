import axios from "axios";
import React, { useState } from "react";
import './ListView.css';

class ListView extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            lists: [],
        }
    }

    componentDidMount(){
        axios.get('http://recruitment.ultimate.systems/to-do-lists', {
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
    

    toggleListView = () => {
        this.props.toggleListView();
    }
    render(){
        const { lists } = this.state
        return(
            <div className="listView">
                {lists.length ?
                lists.map(list => <div className="tasks" key={list.id}>{list.name}</div>) :
                null
                }
                <span className="listSection">
                <input type="text" placeholder="List name" className="listName"></input>
                </span>
                
                <div className="tasks">
                    <input type="checkbox" className="checkBox"></input>
                    <input type="text" placeholder="Task name" className="taskNameInput"></input>
                    <span className="checkmark"></span>
                </div>
                
                
                <button className="addBtn"> ADD </button>
                <button className="cancelAddBtn"> CANCEL </button>
                <a className="cancelBtn" onClick={this.toggleListView}>CANCEL</a>
                <button className="saveBtn">SAVE</button>
            </div>
        );
    }
}export default ListView;