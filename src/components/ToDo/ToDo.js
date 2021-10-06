import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAssistiveListeningSystems, faSignOutAlt, faPlus, faCheckSquare, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';
import ListView from "../ListView/ListView";
import axios from "axios";

const {REACT_APP_DB_HOST} = process.env;

class ToDo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            placeholder: false,
            lists: [],
            viewList: false,
            indexOfList: 0,
            renderToDo: false,
            dataFromChild: "",
            newList: {
                id: "",
                name: "I'm nameless list :(",
                task: []
            },
            searchingPhrase: "",
            placeholderList: {},
        }
    }


    logged = () => {
        this.props.logged();
    }


    componentDidMount = () => {
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`, {
            headers: {
                'Authorization': 'Bearer siema'
            }
        })
        .then(response => {   
                this.setState({ lists: response.data })
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

    onPlaceholderChange = (value) => {
        this.setState({
            placeholder: value
        })
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


    filterBySearch = () => {

    }

    addList = () => {

        /* First get the info about lists to write it down in a var */
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`)
            .then(response => {
                /* Write down all lists in lists var */
                this.setState({ lists: response.data })
            })
            .then(() => {
                this.setState({
                    newList: {
                        ...this.state.newList,
                        id: this.state.lists.length + 1,
                    }
                })
            })
            .then(() => {
                axios.post(`${REACT_APP_DB_HOST}to-do-lists/`, {
                    ...this.state.newList
                })
            })

    }

    deleteList = (e) => {
        axios.get(`${REACT_APP_DB_HOST}to-do-lists/`)
            .then(response => {
                this.setState({
                    placeholderList: response.data[this.props.index - 1],
                })
            })
            .then(() => {
                axios.delete(`${REACT_APP_DB_HOST}to-do-lists/${this.state.indexOfList}`)
            .then(() => {
                this.componentDidMount()
            })

        this.setState({
            viewList: false,
        })
            })
    }


    render = () => {
        const { lists, viewList, indexOfList, renderToDo } = this.state;
        if (this.state.placeholder === true){
            this.componentDidMount()
            this.setState({
                placeholder: false
            })
        }
        return (
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <input placeholder="Search for lists!" className="searchInput" onChange={(e) => this.setState({ searchingPhrase: e.target.value.toLowerCase() })} />
                <div className="mainBody">
                    <div className="lists">
                        {lists.filter((list) => {
                            if (this.state.searchingPhrase === "") {
                                return list.name
                            } else if (list.name.toLowerCase().includes(this.state.searchingPhrase.toLowerCase())) {
                                return list.name
                            }
                        }).map((list, search) => (
                            <span className="pinSpan" key={list.key}>
                                <FontAwesomeIcon icon={faThumbtack} className="pinIcon" key={list.key}/>
                                <div className="list" key={list.id} onClick={this.listItemOnClick} onClickCapture={() => this.setState({ indexOfList: list.id })} index={list.id}  >
                                    <h3 className="listName" key={list.key}>{list.name}</h3>
                                    <p className="createDate" key={list.key}> created today</p>
                                    <span className="tasksDone" key={list.key}>
                                        <p key={list.key}> Tasks: {list.task.length}</p>
                                        <FontAwesomeIcon icon={faCheckSquare} className="doneIcon" key={list.key}/>
                                        <p key={list.key}>/{list.task.length} all</p>
                                    </span>
                                </div>
                                <FontAwesomeIcon icon={faThumbtack} className="pinIcon" key={list.key}/>
                            </span>
                        ))}
                        {viewList && <ListView toggleListView={this.toggleListView} index={indexOfList} 
                        renderToDo={renderToDo} deleteList={this.deleteList} toDoMount={this.componentDidMount} placeholder={this.state.placeholder} onPlaceholderChange={this.onPlaceholderChange}/>}
                    </div>
                </div>
                <span className="addNewList">
                    <FontAwesomeIcon icon={faPlus} className="plusList" onClick={this.addList} />
                    <p className="plusListDescription"> add new list </p>               
                </span>
                <a className="refreshServer" href="https://todolist-fake-server.herokuapp.com/"> If you don't see your lists just click here and then come back here :)</a>
            </div>
        );
    }
}
export default ToDo;