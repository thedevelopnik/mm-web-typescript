import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { inject, observer } from 'mobx-react';

interface State {
    numChecked: number;
}

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

export default class TraitsSchool extends React.Component<any, State> {
    state = {
        numChecked: 0
    };

    handleAmbChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 0);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 0);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleHumChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 1);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 1);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleColChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 2);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 2);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleIndChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 3);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 3);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleExtChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 4);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 4);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleIntChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 5);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 5);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleArtChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 6);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 6);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleMusChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 7);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 7);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleCreChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 8);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 8);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleOrgChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 9);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 9);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handlePlaChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 10);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 10);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleQuiChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 11);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 11);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleVerChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 12);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 12);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleWriChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 13);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 13);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleJoyChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 14);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 14);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleTecChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 15);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 15);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleAnaChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 16);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 16);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handlePatChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 17);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 17);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleSpoChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 18);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 18);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    handleRouChecked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('traits', 19);
            this.setState({
                numChecked: this.state.numChecked + 1
            });
        } else {
            this.props.currentUser.removeFromMatchProfileArray('traits', 19);
            this.setState({
                numChecked: this.state.numChecked - 1
            });
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="Ambitious"
                    style={styles.checkbox}
                    onCheck={this.handleAmbChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        0
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            0
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Humorous"
                    style={styles.checkbox}
                    onCheck={this.handleHumChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        1
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            1
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Collaborative"
                    style={styles.checkbox}
                    onCheck={this.handleColChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        2
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            2
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Independent"
                    style={styles.checkbox}
                    onCheck={this.handleIndChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        3
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            3
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Extroverted"
                    style={styles.checkbox}
                    onCheck={this.handleExtChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        4
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            4
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Introverted"
                    style={styles.checkbox}
                    onCheck={this.handleIntChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        5
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            5
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Artistic"
                    style={styles.checkbox}
                    onCheck={this.handleArtChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        6
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            6
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Musical"
                    style={styles.checkbox}
                    onCheck={this.handleMusChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        7
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            7
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Creative"
                    style={styles.checkbox}
                    onCheck={this.handleCreChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        8
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            8
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Organized"
                    style={styles.checkbox}
                    onCheck={this.handleOrgChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        9
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            9
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Playful"
                    style={styles.checkbox}
                    onCheck={this.handlePlaChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        10
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            10
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Quiet"
                    style={styles.checkbox}
                    onCheck={this.handleQuiChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        11
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            11
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Verbal Communicator"
                    style={styles.checkbox}
                    onCheck={this.handleVerChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        12
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            12
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Written Communicator"
                    style={styles.checkbox}
                    onCheck={this.handleWriChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        13
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            13
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Joyful"
                    style={styles.checkbox}
                    onCheck={this.handleJoyChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        14
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            14
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Techie"
                    style={styles.checkbox}
                    onCheck={this.handleTecChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        15
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            15
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Analog"
                    style={styles.checkbox}
                    onCheck={this.handleAnaChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        16
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            16
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Patient"
                    style={styles.checkbox}
                    onCheck={this.handlePatChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        17
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            17
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Spontaneous"
                    style={styles.checkbox}
                    onCheck={this.handleSpoChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        18
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            18
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
                <Checkbox
                    label="Routine Oriented"
                    style={styles.checkbox}
                    onCheck={this.handleRouChecked}
                    checked={this.props.currentUser.matchingProfile.traits.includes(
                        19
                    )}
                    disabled={
                        !this.props.currentUser.matchingProfile.traits.includes(
                            19
                        ) &&
                            this.state.numChecked >= 7
                    }
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(TraitsSchool));
