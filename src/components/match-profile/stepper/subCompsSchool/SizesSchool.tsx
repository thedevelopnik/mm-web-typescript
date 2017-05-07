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

export default class SizesSchool extends React.Component<any, undefined> {
    handleOnChange = (event: React.FormEvent<{}>, value: string) => {
        this.props.currentUser.updateMatchingProfile({
            sizes: [value],
            sizesWgt: 10
        });
    }

    render() {
        return (
            <RadioButtonGroup name="sizes" onChange={this.handleOnChange}>
                <RadioButton
                    value={0}
                    label="4 or less"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(0)}
                />
                <RadioButton
                    value={1}
                    label="4 to 9"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(1)}
                />
                <RadioButton
                    value={2}
                    label="10 to 19"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(2)}
                />
                <RadioButton
                    value={3}
                    label="20 or more"
                    style={styles.radioButton}
                    checked={this.props.currentUser.matchingProfile.sizes.includes(3)}
                />
            </RadioButtonGroup>
        );
    }
}

export const $ = inject('currentUser')(observer(SizesSchool));
