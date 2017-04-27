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

export default class TrainingsSchool extends React.Component<Props, undefined> {
    handleAMIChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 0);
        }
    }

    handleAMSChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 1);
        }
    }

    handleMCIChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 2);
        }
    }

    handleSNMChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 3);
        }
    }

    handleCGSChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 4);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 4);
        }
    }

    handleOtherChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('trainings', 5);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('trainings', 5);
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="AMI"
                    style={styles.checkbox}
                    onCheck={this.handleAMIChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(0)}
                />
                <Checkbox
                    label="AMS"
                    style={styles.checkbox}
                    onCheck={this.handleAMSChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(1)}
                />
                <Checkbox
                    label="MCI"
                    style={styles.checkbox}
                    onCheck={this.handleMCIChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(2)}
                />
                <Checkbox
                    label="SNM"
                    style={styles.checkbox}
                    onCheck={this.handleSNMChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(3)}
                />
                <Checkbox
                    label="CGS"
                    style={styles.checkbox}
                    onCheck={this.handleCGSChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(4)}
                />
                <Checkbox
                    label="Other"
                    style={styles.checkbox}
                    onCheck={this.handleOtherChecked}
                    checked={this.props.currentUser.matchingProfile.trainings.includes(5)}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(TrainingsSchool));
