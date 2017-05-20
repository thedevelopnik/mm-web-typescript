import * as React from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import { $ as FAQ } from './FAQ';
import { $ as RegisterForm } from './RegisterForm';
import { $ as SignInForm } from './SignInForm';
import FlatButton from 'material-ui/FlatButton';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { inject, observer } from 'mobx-react';

// tslint:disable-next-line:no-any
class Header extends React.Component<any, {}> {

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/v1/auth/ping',
            withCredentials: true,
        })
        .then((res: AxiosResponse) => {
            this.setState({ logged: true });
        })
        .catch((error: AxiosError) => {
            this.setState({ logged: false });
        });
    }

    openFAQ = () => {
        this.props.store.openFaq();
    }

    openSignIn = () => {
        this.props.store.openSignIn();
    }

    render() {
        return (
            <Toolbar className="sticky">
                <ToolbarGroup>
                    <ToolbarTitle text="Montessori Match" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="About" />
                    <FlatButton
                        label="FAQ"
                        onTouchTap={this.openFAQ}
                    />
                    <FlatButton label="Contact" />
                    <FlatButton label="Terms" />
                    <FlatButton label="Sign In" onTouchTap={this.openSignIn}/>
                    <FAQ />
                    <RegisterForm />
                    <SignInForm />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export const $ = inject('store')(observer(Header));
