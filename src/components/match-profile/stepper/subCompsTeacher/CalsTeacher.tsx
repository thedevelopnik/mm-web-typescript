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

class CalsTeacher extends React.Component<Props, undefined> {
    handleTraditionalChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('cals', 0);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('cals', 0);
        }
    }

    handleYearRoundChecked = (event: Event, isInputChecked: boolean) => {
        if (isInputChecked) {
            this.props.currentUser.pushToMatchProfileArray('cals', 1);
        } else {
            this.props.currentUser.removeFromMatchProfileArray('cals', 1);
        }
    }

    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="Traditional"
                    style={styles.checkbox}
                    onCheck={this.handleTraditionalChecked}
                    checked={this.props.currentUser.matchingProfile.cals.includes(0)}
                />
                <Checkbox
                    label="Year-Round"
                    style={styles.checkbox}
                    onCheck={this.handleYearRoundChecked}
                    checked={this.props.currentUser.matchingProfile.cals.includes(1)}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(CalsTeacher));
