import * as React from 'react';
import { $ as Header } from '../Header';
import { Home } from '../Home/Home';
import { $ as Profile } from '../Profile';
import { State } from '../../interfaces';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// tslint:disable-next-line:no-any
export class App extends React.Component<any, State> {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path="/profile" component={Profile} />
                    <Route exact={true} path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}
