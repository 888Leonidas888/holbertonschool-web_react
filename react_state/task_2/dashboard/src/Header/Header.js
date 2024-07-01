import logo from '../assets/holberton-logo.jpg';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    borderBottom: '4px solid',
    display: 'flex',
    alignItems: 'center',
    fontSize: '30px',
    color: '#c7254e',
    margin: '0 15px',
    '@media (max-width: 900px)': {
      flexDirection: 'row',
      textAlign: 'center',
      margin: '0',
    },
  },
  img: {
    width: '300px',
    height: 'auto',
    '@media (max-width: 900px)': {
      width: '35vw',
    },
  },
  h1: {
    color: '#c7254e',
    marginLeft: '1.5vw',
    '@media (max-width: 900px)': {
      marginLeft: '0',
      fontSize: '9vw',
    },
  },
  logoutSection: {
    textAlign: 'right',
    margin: '10px',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      textAlign: 'center',
    },
  },
});

class Header extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    const { logOut } = this.context;
    logOut();
  };
  render() {
    const { user } = this.context;
    const isLoggedIn = user.isLoggedIn;
    return (
      <>
        <header className={css(styles.header)}>
          <img src={logo} className={css(styles.img)} alt="logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </header>
        {isLoggedIn && (
          <div
            className={css(styles.logoutSection)}
            id="logoutSection"
            onClick={this.handleLogout}
          >
            Welcome {user.email} (logout)
          </div>
        )}
      </>
    );
  }
}

export default Header;
