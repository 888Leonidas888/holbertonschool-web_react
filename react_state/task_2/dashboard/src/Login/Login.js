import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

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

class Login extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.updateSubmitButtonState = this.updateSubmitButtonState.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { logIn } = this.context;
    logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value }, this.updateSubmitButtonState);
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value }, this.updateSubmitButtonState);
  }

  updateSubmitButtonState() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <>
        <div className={css(styles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className={css(styles.inputGroup)}>
              <label htmlFor="pass">Password: </label>
              <input
                type="password"
                id="pass"
                value={password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input
              className={css(styles.button)}
              type="submit"
              value="OK"
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Login;
