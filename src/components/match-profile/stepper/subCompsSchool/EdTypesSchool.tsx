import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { inject, observer } from 'mobx-react';

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

export default class EdTypesSchool extends React.Component<any, undefined> {
    handleNoChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 0);
        }
    }

    handleSomeChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 1);
        }
    }

    handleAssocChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 2);
        }
    }

    handleBachChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 3);
        }
    }

    handleMastChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 4);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 4);
        }
    }

    handleDocChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('edTypes', 5);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('edTypes', 5);
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
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(4)}
                />
                <Checkbox
                    label="Doctorate"
                    style={styles.checkbox}
                    onCheck={this.handleDocChecked}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(5)}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(EdTypesSchool));
