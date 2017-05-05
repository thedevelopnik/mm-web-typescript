import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { inject, observer } from 'mobx-react';
import { CurrentUser } from '../../../../CurrentUser';

interface Props {
    currentUser: CurrentUser;
}


const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

export default class EdTypesSchool extends React.Component<Props, undefined> {
    handleNoChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 0);
        }
    }

    handleSomeChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 1);
        }
    }

    handleBachChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 2);
        }
    }

    handleMastChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 3);
        }
    }

    handleDocChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 4);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 4);
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="No College"
                    style={styles.checkbox}
                    onCheck={this.handleNoChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(0)}
                />
                <Checkbox
                    label="Some College"
                    style={styles.checkbox}
                    onCheck={this.handleSomeChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(1)}
                />
                <Checkbox
                    label="Associate's Degree"
                    style={styles.checkbox}
                    onCheck={this.handleAssocChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(2)}
                />
                <Checkbox
                    label="Bachelor's Degree"
                    style={styles.checkbox}
                    onCheck={this.handleBachChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(3)}
                />
                <Checkbox
                    label="Master's Degree"
                    style={styles.checkbox}
                    onCheck={this.handleMastChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(3)}
                />
                <Checkbox
                    label="Doctorate"
                    style={styles.checkbox}
                    onCheck={this.handleDocChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(3)}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(EdTypesSchool));
