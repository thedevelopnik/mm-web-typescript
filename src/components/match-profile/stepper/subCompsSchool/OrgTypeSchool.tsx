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

export default class OrgTypeSchool extends React.Component<Props, undefined> {
    handleOnChange = (event: Event, value: number) => {
        this.props.currentUser.updateMatchingProfile({
            orgTypes: [value],
            orgTypesWgt: 10
        });
    }

    render() {
        return (
            <RadioButtonGroup name="orgTypes" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="Public District"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(0)}
                />
                <RadioButton
                    value={1}
                    label="Public Magnet"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(1)}
                />
                <RadioButton
                    value={2}
                    label="Public Charter"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(2)}
                />
                <RadioButton
                    value={3}
                    label="Public Innovation"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(3)}
                />
                <RadioButton
                    value={4}
                    label="Private For-Profit, Single Owner"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(4)}
                />
                <RadioButton
                    value={5}
                    label="Private For-Profit, Corporate Owner"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(5)}
                />
                <RadioButton
                    value={6}
                    label="Private Non-Profit"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.orgTypes.includes(6)}
                />
            </RadioButtonGroup>
        );
    }
}

export const $ = inject('currentUser')(observer(OrgTypeSchool));
