import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import * as validator from 'validator';
import * as passValidator from 'password-validator';
import axios from 'axios';

// tslint:disable-next-line:no-any
const schema: any = new passValidator();

schema
    .isMin(8)
    .isMax(24)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .not()
    .spaces()
    .has()
    .symbols();

// tslint:disable-next-line:no-any
const styles: any = {
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
    }
};

interface SignUpObject {
    memberType: string;
    firstName: string;
    firstNameError: string | boolean;
    lastName: string;
    lastNameError: string | boolean;
    email: string;
    emailError: string | boolean;
    displayName: string;
    displayNameError: string | boolean;
    password: string;
    passError: string | boolean;
    confirmPassword: string;
    confPassError: string | boolean;
}

interface NewMemberResData {
    id: number;
    memberType: string;
}

// tslint:disable-next-line:no-any
class RegisterForm extends React.Component<any, SignUpObject> {
    state = {
        memberType: 'educator',
        firstName: '',
        firstNameError: false,
        lastName: '',
        lastNameError: false,
        email: '',
        emailError: false,
        displayName: '',
        displayNameError: false,
        password: '',
        passError: false,
        confirmPassword: '',
        confPassError: false
    };

    createNewUser = () => {
        if (
            this.state.firstNameError ||
                this.state.lastNameError ||
                this.state.emailError ||
                this.state.displayNameError ||
                this.state.passError ||
                this.state.confPassError
        ) {
            return;
        }
        return axios.post('/api/new-user', this.state)
        .then((res) => {
            const data = res.data as NewMemberResData;
            this.props.store.setId(data.id);
            this.props.store.setMemberType(data.memberType);
            this.props.store.closeRegister();
            this.props.history.push('/profile');
        })
        .catch(error => {
            this.setState({ emailError: error.message });
        });
    }

    handleRadioChange = (event: React.FormEvent<{}>, value: string) => {
        if (value === 'educator') {
            this.setState({ memberType: 'educator', lastName: '' });
        } else if (value === 'school') {
            this.setState({ memberType: 'school', lastName: 'school' });
        }
    }

    handleFirstNameChange = (event: React.FormEvent<{}>, value: string) => {
        if (value === '' || value === undefined || value === null) {
            this.setState({
                firstNameError: 'First name is required',
                firstName: value
            });
            return;
        }
        this.setState({
            firstName: value,
            firstNameError: false
        });
    }

    handleLastNameChange = (event: React.FormEvent<{}>, value: string) => {
        if (value === '' || value === undefined || value === null) {
            this.setState({
                lastNameError: 'Last name is required',
                lastName: value
            });
            return;
        }
        this.setState({
            lastName: value,
            lastNameError: false
        });
    }

    handleDisplayNameChange = (event: React.FormEvent<{}>, value: string) => {
        if (value === '' || value === undefined || value === null) {
            this.setState({
                displayNameError: 'Display name is required',
                displayName: value
            });
            return;
        }
        this.setState({
            displayName: value,
            displayNameError: false
        });
    }

    handleEmailChange = (event: React.FormEvent<{}>, value: string) => {
        if (value === '' || value === undefined || value === null) {
            this.setState({
                emailError: 'Email is required',
                email: value
            });
            return;
        }
        if (!validator.isEmail(value)) {
            this.setState({
                emailError: 'Please enter an email address',
                email: value
            });
            return;
        }
        this.setState({
            email: value,
            emailError: false
        });
    }

    handlePasswordChange = (event: React.FormEvent<{}>, value: string) => {
        const validPass = schema.validate(value);
        if (validPass) {
            this.setState({
                password: value,
                passError: false
            });
            return;
        }
        this.setState({
            passError: 'Password: > 8 characters, >= one number, one uppercase, one lowercase, one symbol',
            password: value
        });
    }

    handleConfPassChange = (event: React.FormEvent<{}>, value: string) => {
        if (value !== this.state.password) {
            this.setState({
                confirmPassword: value,
                confPassError: true
            });
            return;
        }
        this.setState({
            confirmPassword: value,
            confPassError: false
        });
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.props.store.closeRegister}
                />
            ),
            (
                <FlatButton
                    label="Register"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={this.createNewUser}
                    data-test="button-submit-sign-up"
                />
            )
        ];

        return (
            <div>
                <Dialog
                    title="Sign Up"
                    actions={actions}
                    modal={false}
                    open={this.props.store.registerIsOpen}
                    onRequestClose={this.createNewUser}
                >
                    I'm signing up as a...

                    <div
                        style={styles.marginTop}
                        className="display-flex half-width text-left"
                    >
                        <RadioButtonGroup
                            onChange={this.handleRadioChange}
                            name="memberType"
                            defaultSelected="educator"
                        >
                            <RadioButton
                                value="educator"
                                label="Teacher"
                                style={styles.radioButton}
                                data-test="radio-educator"
                            />
                            <RadioButton
                                value="school"
                                label="School"
                                style={styles.radioButton}
                                data-test="radio-school"
                            />
                        </RadioButtonGroup>
                    </div>
                    {this.state.memberType === 'educator'
                        ? (
                            <div>
                              <TextField
                                  className="half-width"
                                  hintText="First Name"
                                  onChange={this.handleFirstNameChange}
                                  data-test="field-first-name"
                                  errorText={
                                      this.state.firstNameError
                                          ? this.state.firstNameError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Last Name"
                                  onChange={this.handleLastNameChange}
                                  data-test="field-last-name"
                                  errorText={
                                      this.state.lastNameError
                                          ? this.state.lastNameError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Email"
                                  onChange={this.handleEmailChange}
                                  data-test="field-email"
                                  errorText={
                                      this.state.emailError
                                          ? this.state.emailError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Display Name"
                                  onChange={this.handleDisplayNameChange}
                                  data-test="field-display-name"
                                  errorText={
                                      this.state.displayNameError
                                          ? this.state.displayNameError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Password"
                                  type="password"
                                  onChange={this.handlePasswordChange}
                                  data-test="field-password"
                                  errorText={
                                      this.state.passError
                                          ? this.state.passError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Confirm Password"
                                  type="password"
                                  onChange={this.handleConfPassChange}
                                  data-test="field-conf-password"
                                  errorText={
                                      this.state.confPassError
                                          ? 'Passwords do not match'
                                          : null
                                  }
                              />
                          </div>
                        )
                        : (
                            <div>
                              <TextField
                                  className="half-width"
                                  hintText="School Name"
                                  onChange={this.handleFirstNameChange}
                                  data-test="field-first-name"
                                  errorText={
                                      this.state.firstNameError
                                          ? this.state.firstNameError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Email"
                                  onChange={this.handleEmailChange}
                                  data-test="field-email"
                                  errorText={
                                      this.state.emailError
                                          ? this.state.emailError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Display Name"
                                  onChange={this.handleDisplayNameChange}
                                  data-test="field-display-name"
                                  errorText={
                                      this.state.displayNameError
                                          ? this.state.displayNameError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Password"
                                  type="password"
                                  onChange={this.handlePasswordChange}
                                  data-test="field-password"
                                  errorText={
                                      this.state.passError
                                          ? this.state.passError
                                          : null
                                  }
                              />
                              <TextField
                                  className="half-width"
                                  hintText="Confirm Password"
                                  type="password"
                                  onChange={this.handleConfPassChange}
                                  data-test="field-conf-password"
                                  errorText={
                                      this.state.confPassError
                                          ? 'Passwords do not match'
                                          : null
                                  }
                              />
                          </div>
                        )}
                </Dialog>
            </div>
        );
    }
}

export const registerForm = withRouter(inject('store')(observer(RegisterForm)));
