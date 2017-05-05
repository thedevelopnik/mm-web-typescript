import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { inject, observer } from 'mobx-react';
import { CurrentUser } from '../../../../CurrentUser';

interface Props {
    currentUser: CurrentUser;
}

const styles = {
    block: {
        maxWidth: 250
    },
    radioButton: {
        marginBottom: 16
    }
};

export default class CalsSchool extends React.Component<Props, undefined> {
    handleOnChange = (event: Event, value: number) => {
        this.props.currentUser.updateMatchingProfile({
            cals: [value],
            calsWgt: 10
        });
    }

    render() {
        return (
            <RadioButtonGroup name="cals" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="Traditional"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.cals.includes(
                        0
                    )}
                />
                <RadioButton
                    value={1}
                    label="Year-Round"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.cals.includes(
                        1
                    )}
                />
            </RadioButtonGroup>
        );
    }
}

export const $ = inject('currentUser')(observer(CalsSchool));
