import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-any
export class MainMenu extends React.Component<any, any> {
    iconbutton() {
        return (
            <IconButton><MenuIcon color="#fff" /></IconButton>
        );
    }

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    this.iconbutton()
                }
                targetOrigin={{ horizontal: 'left', vertical: 'top'}}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem
                    primaryText="Home"
                    containerElement={<Link to="/" />}
                />
                <MenuItem
                    primaryText="Legal"
                    containerElement={<Link to="/legal" />}
                />
            </IconMenu>
        );
    }
}
