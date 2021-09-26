import React from "react";
import './ListView.css';

class ListView extends React.Component{

    toggleListView = () => {
        this.props.toggleListView();
    }
    render(){
        return(
            <div className="listView">
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