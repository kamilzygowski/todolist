import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAssistiveListeningSystems, faSignOutAlt, faPlus, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';
import ListView from "../ListView/ListView";
import axios from "axios";

class ToDo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            viewList: false,
            indexOfList: 0,
            renderToDo: false,
            dataFromChild: "",
            newList: {
                id: "",
                name:"I'm nameless list :(",
                task:[]
            },
            searchingPhrase: "",
        }
    }


    logged = () => {
        this.props.logged();
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
                //console.log(error)
            })
    }

    getKeyOfList = (e) => {
        if (e !== undefined) {
            this.setState({
                indexOfList: e.target.getAttribute('index')
            });
            //console.log(e.target)
        }

    }



    toggleListView = () => {
        if (this.state.viewList === false) {
            this.setState({
                viewList: true,
            });


        } else {
            this.setState({
                viewList: false,
            });

        }
    }

    listItemOnClick = () => {
        this.getKeyOfList()
        this.toggleListView()
    }



    componentDidUpdate() {
        this.componentDidMount()
    }

    filterBySearch = () =>{

    }

    addList = () => {

        /* First get the info about lists to write it down in a var */
        axios.get('http://localhost:8000/to-do-lists')
        .then(response => {
            console.log(response)
            /* Write down all lists in lists var */
            this.setState({ lists: response.data })
        })
        .then(response => {
            this.setState({
                newList: {
                    ...this.state.newList,
                    id: this.state.lists.length +1,
                }
            })
            console.log(this.state.newList) // zajebiscie dziala
        })


        axios.post('http://localhost:8000/to-do-lists', {
            ...this.state.newList
        })
        .then(response => {
            console.log(response)
        })
    }


    render() {
        const { lists, viewList, indexOfList, renderToDo } = this.state;
        return (
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <input placeholder="Search" className="searchInput" onChange={(e) => this.setState({ searchingPhrase: e.target.value.toLowerCase() })}/>
                <div className="mainBody">
                    <div className="lists">
                        {lists.filter((list) => {
                            if (this.state.searchingPhrase === ""){
                                return list.name
                            } else if (list.name.toLowerCase().includes(this.state.searchingPhrase.toLowerCase())) {
                                return list.name
                            }
                        }).map((list, search) => (<div className="list" onClick={this.listItemOnClick} onClickCapture={() => this.setState({ indexOfList: list.id })} key={list.id} index={list.id}  >
                            <h3>{list.name}</h3>
                            <p> created today</p>
                            <span className="tasksDone">
                                <p> Tasks: {list.task.length}</p>
                                <FontAwesomeIcon icon={faCheckSquare} className="doneIcon"/>
                                <p>/{list.task.length} all</p>
                            </span>
                        </div>))}
                        {viewList && <ListView toggleListView={this.toggleListView} index={indexOfList} renderToDo={renderToDo} />}
                    </div>
                </div>
                <span className="addNewList">
                <FontAwesomeIcon icon={faPlus} className="plusList" onClick={this.addList}/>
                <p className="plusListDescription"> add new list </p>
                </span>
            </div>
        );
    }
}
export default ToDo;