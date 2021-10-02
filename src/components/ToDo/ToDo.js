import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAssistiveListeningSystems, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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


    render() {
        const { lists, viewList, indexOfList, renderToDo } = this.state;

        return (
            <div className="toDo">
                <FontAwesomeIcon icon={faSignOutAlt} className="logOut" onClick={this.logged} />
                <input placeholder="Search" className="searchInput" />
                <div className="mainBody">
                    <div className="lists">
                        {lists.map((list) => (<div className="list" onClick={this.listItemOnClick} onClickCapture={() => this.setState({ indexOfList: list.id })} key={list.id} index={list.id}  >
                            <h3>{list.name}</h3>
                            <p> created today</p>
                            <p> {list.task.length} completed/{list.task.length} all</p>
                        </div>))}
                        {viewList && <ListView toggleListView={this.toggleListView} index={indexOfList} renderToDo={renderToDo} />}
                    </div>
                </div>
            </div>
        );
    }
}
export default ToDo;