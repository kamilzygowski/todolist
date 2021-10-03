import axios from "axios";
import React, { useEffect } from "react";
import './ListView.css';

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
        }
    }




    componentDidMount() {
        axios.get('http://localhost:8000/to-do-lists', {
            headers: {
                'Authorization': 'Bearer siema'
            }
        })
            .then(response => {
                this.setState({ lists: response.data })   
            })
            .catch(error => {
                console.log(error)
            })
    }

    addTask = () => {
        axios.get('http://localhost:8000/to-do-lists')
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
            .catch(error => {
                console.log(error)
            })

        /* Build new task in a certain list using cloned list piece */
        setTimeout(() => {
            axios.put('http://localhost:8000/to-do-lists/' + this.props.index, {
                ...this.state.newList,
                task: [
                    ...this.state.newList.task,
                ]
            }).then(response => {
                //console.log(response)
            })
            /* Refresh the ViewList to see the changes on server */
            this.componentDidMount()
        }, 500)

    }

    saveChanges = () => {
        /* Get the list to save it in newList state, then change it's list name to given in input */
        axios.get('http://localhost:8000/to-do-lists')
            .then(response => {
                this.setState({
                    newList: response.data[this.props.index - 1],
                })
                //console.log(response.data[this.props.index -1])
            })
            .then(response => {
                //console.log("here will be code: ", this.state.newList.task[this.state.changeTaskId - 1])
                //console.log("here is id: ", this.state.changeTaskId)

                /* IMPORTANT I have to find out how to setState of IN ARRAY thimg like below without mutating this state */
                if (this.state.changeTaskName !== "" && this.state.changeTaskId !== "") {
                    this.state.newList.task[this.state.changeTaskId - 1].name = this.state.changeTaskName
                }
            })

            .catch(error => {
                console.log(error)
            })

        setTimeout(() => {
            if (this.state.changeListName === "") {
                this.setState({
                    changeListName: this.state.newList.name,
                })
            }

            axios.put('http://localhost:8000/to-do-lists/' + this.props.index, {
                ...this.state.newList,
                name: this.state.changeListName,
                task: [
                    ...this.state.newList.task,
                ]
            }).then(response => {
                console.log(response)

            })
            this.componentDidMount()
        }, 500)

    }

    toggleListView = () => {
        this.props.toggleListView();
    }



    render() {

        const { lists } = this.state
        //console.log(changeListName)
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
                                </form>
                            )}



                        </div>) :
                    ""
                }

                {/* Usage buttons on the display view*/}
                <button className="addBtn" type="submit" onClick={this.addTask}> ADD </button>
                <button className="cancelAddBtn"> CANCEL </button>
                <a className="cancelBtn" onClick={this.toggleListView}>CANCEL</a>
                <button className="saveBtn" type="submit" onClick={this.saveChanges}>SAVE</button>
            </div>
        );

    }
} export default ListView;