import * as React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Store } from '../../store';

const store = new Store();

export class Root extends React.Component<{}, null> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    }
};
