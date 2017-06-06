import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Root as Prod } from './components/containers/Root.prod';
import { Root as Dev } from './components/containers/Root.dev';
import './index.css';

const env = process.env.NODE_ENV;

if (lightBaseTheme.palette !== undefined) {
    lightBaseTheme.palette.primary1Color = '#40abfc';
    lightBaseTheme.palette.primary2Color = '#002eda';
    lightBaseTheme.palette.accent1Color = '#ff6600';
    lightBaseTheme.palette.pickerHeaderColor = '#40abfc';
};

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {env === 'production' ? <Prod /> : <Dev />}
    </MuiThemeProvider>,
    document.getElementById('root') as HTMLElement
);
