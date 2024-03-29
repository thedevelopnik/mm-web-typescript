import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link, withRouter } from 'react-router-dom';
import FaceIcon from 'material-ui/svg-icons/action/face';
import { $ as RegisterForm } from './RegisterForm';
import { $ as SignInForm } from './SignInForm';
import { inject, observer } from 'mobx-react';
import axios, { AxiosResponse, AxiosError } from 'axios';

// tslint:disable-next-line:no-any
export class Login extends React.Component<any, void> {
    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                        (
                            <IconButton>
                                <FaceIcon
                                    color="#fff"
                                    data-test="button-auth-menu"
                                />
                            </IconButton>
                        )
                    }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem>
                        <FlatButton
                            label="Sign Up"
                            onTouchTap={this.props.store.openRegister}
                            data-test="button-open-sign-up"
                        />
                    </MenuItem>
                    <MenuItem>
                        <FlatButton
                            label="Sign In"
                            onTouchTap={this.props.store.openSignIn}
                            data-test="button-open-sign-in"
                        />
                    </MenuItem>
                </IconMenu>
                <SignInForm {...this.props} />
                <RegisterForm />
            </div>
        );
    }
}

export const $1 = inject('store')(observer(Login));

// tslint:disable-next-line:no-any
class Logged extends React.Component<any, any> {
    handleSignOut = () => {
        return axios({
            url: 'http://localhost:3001/api/v1/auth/logout',
            withCredentials: true,
        })
        .then((res: AxiosResponse) => {
            this.props.history.push('/');
            this.props.currentUser.clearUser();
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><FaceIcon color="#fff" /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <Link to={`/profile`}>
                    <MenuItem primaryText="My Profile" />
                </Link>
                <MenuItem
                    primaryText="Sign out"
                    onTouchTap={this.handleSignOut}
                    data-test="button-sign-out"
                />
            </IconMenu>
        );
    }
}

export const $2 = withRouter(inject('store', 'currentUser')(observer(Logged)));
