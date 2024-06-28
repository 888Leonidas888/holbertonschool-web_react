import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    marginLeft: '75px',
    '@media (max-width: 900px)': {
      marginLeft: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  
  inputGroup: {
    marginBottom: '10px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="pass">Password: </label>
            <input type="password" id="pass" />
          </div>
          <button type="button" className={css(styles.button)}>OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;
