import axios from "axios";
import React, { useState } from "react";
import './ListView.css';

class ListView extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            lists: [],
            index: 0,
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/to-do-lists', {
            headers: {
              'Authorization': 'Bearer siema'
            }
          })
        .then(response => 
            {
            console.log(this.state.index)
            console.log(response)
            this.setState({lists: response.data})
                           //console.log(this.state.lists)
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
                {
                <span className="listSection">
                <input type="text" placeholder="List name" defaultValue={this.state.lists[0].id} className="listName"></input>
                </span>
                
                }

                {lists.length ?
                lists.map(list => 
                <div className="tasks" key={list.id}>
                    <input type="checkbox" className="checkBox"></input>
                    <input type="text" placeholder="Task name" className="taskNameInput" defaultValue={list.task.map(tasks => tasks.name)}></input>
                    <span className="checkmark"></span>
                </div>) :
                null
                }

                <button className="addBtn"> ADD </button>
                <button className="cancelAddBtn"> CANCEL </button>
                <a className="cancelBtn" onClick={this.toggleListView}>CANCEL</a>
                <button className="saveBtn">SAVE</button>
            </div>
        );
    }
}export default ListView;