import * as React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import { App } from './App';
import { Store } from '../../store';

const store = new Store();

export class Root extends React.Component<{}, null> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact={true} path="/" component={App} />
                        <DevTools />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
};
