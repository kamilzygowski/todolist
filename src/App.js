import React from 'react';
import './App.css';
import ListView from './components/ListView/ListView';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ToDo from './components/ToDo/ToDo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginView: true,
      loggedIn: false,
      viewList: false,
    }
    this.toggleLoginAndRegister = this.toggleLoginAndRegister.bind(this);
  }

  toggleLoginAndRegister = () => {
    if (this.state.loginView === true) {
      this.setState({
        loginView: false,
      });
    } else {
      this.setState({
        loginView: true,
      });
    }
  }

  logIn = () => {
    if(this.state.loggedIn === false){
      this.setState({
      loggedIn: true,
    })
  } else {
    this.setState({
      loggedIn: false,
    })
  }
  }

  toggleListView = () => {
    if(this.state.viewList === false){
    this.setState({
        viewList: true,
    });
    
} else {
    this.setState({
        viewList: false,
    });  
}
}


  render() {
    const { loginView, loggedIn, viewList } = this.state;
    return (
      <div className="App">
        {loginView && !loggedIn && <Login toggle={this.toggleLoginAndRegister} logged={this.logIn} />}
        {!loginView && !loggedIn && <Register toggle={this.toggleLoginAndRegister} />}
        {loggedIn && <ToDo logged={this.logIn} toggleListView={this.toggleListView} viewList={this.viewList}/>}
        {viewList && <ListView toggleListView={this.toggleListView}/>}
      </div>
    );
  }
}

export default App;
