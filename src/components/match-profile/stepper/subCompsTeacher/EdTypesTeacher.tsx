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

export default class EdTypesTeacher extends React.Component<any, undefined> {
    handleOnChange = (event: React.FormEvent<{}>, value: string) => {
        this.props.currentUser.updateMatchingProfile({
            edTypes: [value],
            edTypesWgt: 10
        });
    }

    render() {
        return (
            <RadioButtonGroup name="edTypes" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="No College"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(0)}
                />
                <RadioButton
                    value={1}
                    label="Some College"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(1)}
                />
                <RadioButton
                    value={2}
                    label="Associate's Degree"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(2)}
                />
                <RadioButton
                    value={3}
                    label="Bachelor's Degree"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(3)}
                />
                <RadioButton
                    value={3}
                    label="Master's Degree"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(4)}
                />
                <RadioButton
                    value={3}
                    label="Doctorate"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.edTypes.includes(5)}
                />
            </RadioButtonGroup>
        );
    }
}

export const $ = inject('currentUser')(observer(EdTypesTeacher));
