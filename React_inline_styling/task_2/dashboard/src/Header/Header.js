import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    borderBottom: '4px solid',
    display: 'flex',
    alignItems: 'center',
    fontSize: '30px',
    color: '#c7254e',
    margin: '0 15px',
  },

  h1: {
    color: '#c7254e',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
