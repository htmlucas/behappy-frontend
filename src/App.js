import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import NewUser from './components/NewUser';
import Toast from './components/Toast';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser error={msg => this.refs.toast.error(msg)} />
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;
