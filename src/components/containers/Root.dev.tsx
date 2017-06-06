import * as React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import { App } from './App';
import { store } from '../../Store';
import { currentUser } from '../../CurrentUser';

export class Root extends React.Component<{}, null> {
    render() {
        return (
            <Provider store={store} currentUser={currentUser}>
                <BrowserRouter>
                    <div>
                        <DevTools />
                        <Route path="/" component={App} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
};
