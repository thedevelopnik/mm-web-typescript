import * as React from 'react';
import { Header } from '../Header'
import { State } from '../../interfaces';

export class App extends React.Component<any, State> {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
