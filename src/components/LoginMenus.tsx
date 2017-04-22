import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link, withRouter } from 'react-router-dom';
import FaceIcon from 'material-ui/svg-icons/action/face';
// import RegisterForm from '../../register/register-form.js';
// import SignInForm from '../../sign-in/signin-form.js';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

@observer
@inject('store')
export class Login extends React.Component<any, any> {
    static muiName = 'Login';

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
                {/*<SignInForm />*/}
                {/*<RegisterForm />*/}
            </div>
        );
    }
}

export const $1 = Login;

@observer
@inject('store')
class Logged extends React.Component<any, any> {
    handleSignOut = () => {
        return axios.get('/api/logout')
        .then(res => {
            console.log(res);
            this.props.history.push('/');
            this.props.store.clearUser();
        });
    }

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><FaceIcon color='#fff' /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <Link to={`/profile`}>
                    <MenuItem primaryText='My Profile' />
                </Link>
                <MenuItem
                    primaryText='Sign out'
                    onTouchTap={this.handleSignOut}
                    data-test='button-sign-out'
                />
            </IconMenu>
        );
    }
}

export const $2 = withRouter(Logged);
