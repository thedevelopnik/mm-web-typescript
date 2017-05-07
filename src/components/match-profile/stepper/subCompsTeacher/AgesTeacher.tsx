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

class AgesTeacher extends React.Component<any, undefined> {
    handle03Checked = (event: React.MouseEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 0);
        }
    }

    handle36Checked = (event: React.FormEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 1);
        }
    }

    handle69Checked = (event: React.FormEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 2);
        }
    }

    handle912Checked = (event: React.FormEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 3);
        }
    }

    handle1215Checked = (event: React.FormEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 4);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 4);
        }
    }

    handle1518Checked = (event: React.FormEvent<{}>, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('ageRanges', 5);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('ageRanges', 5);
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="0 to 3"
                    style={styles.checkbox}
                    onCheck={this.handle03Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(0)}
                />
                <Checkbox
                    label="3 to 6"
                    style={styles.checkbox}
                    onCheck={this.handle36Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(1)}
                />
                <Checkbox
                    label="6 to 9"
                    style={styles.checkbox}
                    onCheck={this.handle69Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(2)}
                />
                <Checkbox
                    label="9 to 12"
                    style={styles.checkbox}
                    onCheck={this.handle912Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(3)}
                />
                <Checkbox
                    label="12 to 15"
                    style={styles.checkbox}
                    onCheck={this.handle1215Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(4)}
                />
                <Checkbox
                    label="15 to 18"
                    style={styles.checkbox}
                    onCheck={this.handle1518Checked}
                    checked={this.props.currentUser.matchingProfile.ageRanges.includes(5)}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(AgesTeacher));
