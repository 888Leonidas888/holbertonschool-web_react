import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
