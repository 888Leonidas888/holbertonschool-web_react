import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    marginLeft: '75px',
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email"></input>
          <label htmlFor="pass">Password: </label>
          <input type="password" id="pass"></input>
          <button type="button">OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;
