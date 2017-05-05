import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Checkbox from 'material-ui/Checkbox';
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

export default class SizesTeacher extends React.Component<Props, undefined> {
    handle4OrLessChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('sizes', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('sizes', 0);
        }
    }

    handle5To9Checked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('sizes', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('sizes', 1);
        }
    }

    handle10To19Checked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('sizes', 2);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('sizes', 2);
        }
    }

    handle20OrMoreChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('sizes', 3);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('sizes', 3);
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="4 or less"
                    style={styles.checkbox}
                    onCheck={this.handle4OrLessChecked}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(
                        0
                    )}
                />
                <Checkbox
                    label="5 to 9"
                    style={styles.checkbox}
                    onCheck={this.handle5To9Checked}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(
                        1
                    )}
                />
                <Checkbox
                    label="10 to 19"
                    style={styles.checkbox}
                    onCheck={this.handle10To19Checked}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(
                        2
                    )}
                />
                <Checkbox
                    label="20 or more"
                    style={styles.checkbox}
                    onCheck={this.handle20OrMoreChecked}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(
                        3
                    )}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(SizesTeacher));
