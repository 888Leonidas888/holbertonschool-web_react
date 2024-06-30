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
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;

