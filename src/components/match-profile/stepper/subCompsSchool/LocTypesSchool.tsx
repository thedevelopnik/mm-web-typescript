import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { inject, observer } from 'mobx-react';

const styles = {
    block: {
        maxWidth: 250
    },
    radioButton: {
        marginBottom: 16
    }
};

export default class LocTypesSchool extends React.Component<any, undefined> {
    handleOnChange = (event: React.FormEvent<{}>, value: string) => {
        this.props.currentUser.updateMatchingProfile({
            locTypes: [value],
            locTypesWgt: 10
        });
    }

    render() {
        return (
            <RadioButtonGroup name="locTypes" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="Urban"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.locTypes.includes(0)}
                />
                <RadioButton
                    value={1}
                    label="Suburban"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.locTypes.includes(1)}
                />
                <RadioButton
                    value={2}
                    label="Small City"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.locTypes.includes(2)}
                />
                <RadioButton
                    value={3}
                    label="Rural"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.locTypes.includes(3)}
                />
            </RadioButtonGroup>
        );
    }
}

export const $ = inject('currentUser')(observer(LocTypesSchool));
