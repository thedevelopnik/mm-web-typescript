import * as React from 'react';
import { $2 as Logged, $1 as Login } from './LoginMenus';
import { MainMenu } from './MainMenu';
import AppBar from 'material-ui/AppBar';

export class Header extends React.Component<any, any> {
    state = {
        logged: false
    };

    componentWillMount() {
        // logic here for checking local storage for cookie?
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         this.setState({ logged: true });
        //     } else {
        //         this.setState({ logged: false });
        //     }
        // });
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
