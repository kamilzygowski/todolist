import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ToDo from './components/ToDo/ToDo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginView: true,
      loggedIn: false,
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


  render() {
    const { loginView, loggedIn } = this.state;
    return (
      <div className="App">
        {loginView && !loggedIn && <Login toggle={this.toggleLoginAndRegister} logged={this.logIn} />}
        {!loginView && !loggedIn && <Register toggle={this.toggleLoginAndRegister} />}
        {loggedIn && <ToDo logged={this.logIn} />}
      </div>
    );
  }
}

export default App;
