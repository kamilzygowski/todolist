
import axios from "axios";
import React from "react";
import './ListView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const {REACT_APP_DB_HOST} = process.env;

class ListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            index: 0,
            changeListName: "",
            newList: {},
            newTask: {
                id: 5,
                name: "",
                isDone: false,
            },
            changeTaskName: "",
            changeTaskId: "",
            arrayFirstItem:0,
        }
    }


    componentDidMount() {
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`, {
            headers: {
                'Authorization': 'Bearer siema'
            }
        })
            .then(response => {
                this.setState({ lists: response.data })
            })
    }

    addTask = () => {
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`)
            .then(response => {
                /* Find the list and get it to the this.state variable */
                this.setState({
                    newList: response.data[this.props.index - 1],
                })

            })
            .then(response => {
                /* Create newTask and place it in newTask state */
                this.setState({
                    newTask: {
                        ...this.state.newTask,
                        id: this.state.newList.task.length + 1,
                    }
                })
                /* Add an array object to variable that represents state of list on server */
                this.state.newList.task.push(this.state.newTask)
            })
            .then(() => {
                        /* Build new task in a certain list using cloned list piece */
                axios.put(`${REACT_APP_DB_HOST}to-do-lists/${this.props.index}`, {
                    ...this.state.newList,
                    task: [
                        ...this.state.newList.task,
                    ]
                }).then(() => {
                    /* Refresh the ViewList to see the changes on server */
                    this.componentDidMount()
                })
            })
    }

    saveChanges = () => {
        /* Get the list to save it in newList state, then change it's list name to given in input */
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`)
            .then(response => {
                this.setState({
                    newList: response.data[this.props.index - 1],
                })
            })
            .then(() => {
                /* IMPORTANT I have to find out how to setState of IN ARRAY thimg like below without mutating this state */
                if (this.state.changeTaskName !== "" && this.state.changeTaskId !== "") {
                    this.state.newList.task[this.state.changeTaskId - 1].name = this.state.changeTaskName
                }

                if(this.state.changeListName !==""){
                    this.state.newList.name = this.state.changeListName
                }
            })
            .then(() => {
                axios.put(`${REACT_APP_DB_HOST}to-do-lists/${this.props.index}`, {
                    ...this.state.newList,
                    task: [
                        ...this.state.newList.task,
                    ]
                }).then(() => {
                    this.componentDidMount()
                })
            })
    }

    deleteTask = (e) => {
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`)
            .then(response => {
                this.setState({
                    newList: response.data[this.props.index - 1],
                })
            })
            .then(() => {
                console.log('xd: ' + e.target.id)
                //this.state.newList.task.splice(e.target.id, 1)

                /*for (var i = 0; i < this.state.newList.task.length; i++) {
                    var obj = this.state.newList.task[i];
                
                    if (e.target.id.indexOf(obj.id) !== -1) {
                        this.state.newList.task.splice(i, 1);
                        i--;
                    }
                }*/ 

                axios.put(`${REACT_APP_DB_HOST}to-do-lists/${this.props.index}`,
                this.state.newList
            )
                .then(() => {
                    this.componentDidMount()
                    this.render()
                })
            })

    }

    toggleListView = () => {
        this.props.toggleListView()
    }

    deleteList = () => {
        this.props.deleteList()
    }




    render() {
        const { lists } = this.state
        return (
            <div className="listView">
                {/* Display the name of the last clicked list! */}
                {lists.length ?
                    lists.filter(list => list.id === this.props.index).map(list =>
                        <span className="listSection">
                            <input type="text" placeholder="List name" defaultValue={list.name} onChange={(e) => this.setState({ changeListName: e.target.value })} className="listName"></input>
                        </span>) :
                    ""
                }

                {/* Sort and filter the list that will be displayed*/}
                {lists.length ?
                    lists.filter(list => list.id === this.props.index).map(list =>
                        <div className="tasks" key={list.key}>

                            {/* These are form inputs and checkmark for every task */}
                            {list.task.map(tasks =>
                                <form className="tasksForm" key={list.key}>
                                    <input type="checkbox" className="checkBox"></input>
                                    <input type="text" placeholder="Task name" className="taskNameInput" id={tasks.id} onChange={(e) => this.setState({
                                        changeTaskName: e.target.value
                                    })} onClick={(e) => this.setState({
                                        changeTaskId: e.target.id
                                    })} defaultValue={tasks.name}></input>
                                    <span className="checkmark"></span>
                                    <span className="coverSpan">
                                        <FontAwesomeIcon icon={faTimes} className="deleteTask" id={tasks.id-1} onClick={this.deleteTask} />
                                    </span>
                                </form>
                            )}
                        </div>) :
                    ""
                }
                {/* Usage buttons on the display view*/}
                <button className="addBtn" type="submit" onClick={this.addTask}> ADD TASK </button>
                <button className="cancelAddBtn" onClick={this.deleteList}> DELETE LIST </button>
                <a className="cancelBtn" onClick={this.toggleListView}>CANCEL</a>
                <button className="saveBtn" type="submit" onClick={this.saveChanges}>SAVE</button>
            </div>
        );
    }
} export default ListView;