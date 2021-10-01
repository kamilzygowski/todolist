import axios from "axios";
import React, { useEffect } from "react";
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
                
            //console.log(this.props.index)
            //console.log(response)
            this.setState({lists: response.data})
            //console.log("lists name ",  this.state.lists[0].name)
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
        if(this.state.lists === undefined) return <p> Loading...</p>
        return(
            <div className="listView">
                {/* Display the name of the last clicked list! */}
                {lists.length ?
                lists.filter(list => list.id===this.props.index).map(list =>
                <span className="listSection">
                <input type="text" placeholder="List name" defaultValue={list.name} className="listName"></input>
                </span>) :
                null
                }

                {lists.length ?
                lists.filter(list => list.id===this.props.index).map(list =>
                <div className="tasks">
                    
                    {/* These are form inputs and checkmark for every task */}
                    {list.task.map(tasks => 
                    <form className="tasksForm">
                    <input type="checkbox" className="checkBox"></input>
                    <input type="text" placeholder="Task name" className="taskNameInput" defaultValue={tasks.name}></input>
                    <span className="checkmark"></span>
                    </form>
                    )}
                    
                    
                    
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