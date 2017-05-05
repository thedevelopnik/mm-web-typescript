import * as React from 'react';
import { $2 as Logged, $1 as Login } from './LoginMenus';
import { MainMenu } from './MainMenu';
import AppBar from 'material-ui/AppBar';
import axios, { AxiosResponse, AxiosError } from 'axios';

// tslint:disable-next-line:no-any
export class Header extends React.Component<any, {logged: boolean}> {
    state = {
        logged: false
    };

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

    render() {
        return (
            <AppBar
                title="Montessori Match"
                iconElementLeft={<MainMenu />}
                iconElementRight={this.state.logged ? <Logged /> : <Login />}
            />
        );
    }
}
