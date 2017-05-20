import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { inject, observer } from 'mobx-react';
import * as validator from 'validator';
import axios, { AxiosResponse } from 'axios';
import { User } from '../CurrentUser';

const styles = {
  title: {
    textAlign: 'center'
  },
  dialogBox: {
    width: '70%',
    margin: 'auto',
    maxWidth: 'none'
  },
  marginTop: {
    marginTop: '2rem'
  },
  form: {
    display: 'flex',
    textAlign: 'left'
  }
};

export interface LoginState {
  email: string;
  emailError: string | boolean;
  password: string;
  passError: string | boolean;
}

class SignInForm extends React.Component<any, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: ``,
      emailError: ``,
      password: ``,
      passError: ``,
    };
  }

  signIn = () => {
    return axios({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/auth/login',
      data: this.loginDetails,
      withCredentials: true,
    })
    .then((res: AxiosResponse) => {
      this.props.currentUser.loadInitialUser(res.data as User);
      this.props.store.closeSignIn();
    })
    .catch((error: string) => {
      this.setState({ passError: 'Invalid email or password' });
    });
    }

  handleEmailChange = (event: React.FormEvent<{}>, value: string) => {
    if (value === '' || value === undefined || value === null) {
      this.setState({
          email: value,
          emailError: 'Email is required',
      });
      return;
    }
    if (!validator.isEmail(value)) {
      this.setState({
        email: value,
        emailError: 'Please enter an email address',
      });
      return;
    }
    this.setState({
      email: value,
      emailError: false,
    });
  }

  handlePasswordChange = (event: React.FormEvent<{}>, value: string) => {
    if (value === '' || value === undefined || value === null) {
      this.setState({
        passError: 'Password is required',
        password: value
      });
      return;
    }
    this.setState({
      password: value,
      passError: false,
    });
  }

  render() {
    const actions = [
      (
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.props.store.closeSignIn}
        />
      ),
      (
        <FlatButton
          label="Sign In"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.signIn}
        />
      )
    ];

    return (
      <div>
        <Dialog
          title="Sign In"
          actions={actions}
          modal={true}
          open={this.props.store.signInIsOpen}
        >
          Welcome!
          <div
              style={styles.marginTop}
              className="display-flex half-width text-left"
          >
            <TextField
              className="half-width"
              hintText="Email"
              onChange={this.handleEmailChange}
              errorText={this.state.emailError ? this.state.emailError : null}
            />
            <TextField
              className="half-width"
              hintText="Password"
              type="password"
              onChange={this.handlePasswordChange}
              errorText={this.state.passError ? this.state.passError : null}
            />
          </div>
        </Dialog>
      </div>
    );
  }

  private get loginDetails() {
    return {
      email: this.state.email,
      password: this.state.password,
    };
  }
}

export const $ =  inject('currentUser', 'store')(observer(SignInForm));
