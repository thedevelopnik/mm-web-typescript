import * as React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import { App } from './App';
import { store } from '../../Store';

export class Root extends React.Component<{}, null> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <DevTools />
                        <Route exact={true} path="/" component={App} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
};
