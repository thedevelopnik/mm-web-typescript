import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepContent, StepLabel } from 'material-ui/Stepper';
import { $ as OrgTypeSchool } from './subCompsSchool/OrgTypeSchool';
import { $ as CalsSchool } from './subCompsSchool/CalsSchool';
import { $ as StatesSchool } from './subCompsSchool/StatesSchool';
import { $ as SizesSchool } from './subCompsSchool/SizesSchool';
import { $ as AgesSchool } from './subCompsSchool/AgesSchool';
import { $ as TrainingsSchool } from './subCompsSchool/TrainingsSchool';
import { $ as TraitsSchool } from './subCompsSchool/TraitsSchool';
import { $ as LocTypesSchool } from './subCompsSchool/LocTypesSchool';
import { $ as EdTypesSchool } from './subCompsSchool/EdTypesSchool';
import { inject, observer } from 'mobx-react';
import * as translators from '../../../Translators';

interface State {
    finished: boolean;
    stepIndex: number;
}

class MatchProfileStepperSchool extends React.Component<any, State> {
    state = {
        finished: false,
        stepIndex: 0
    };

    translateMatchingProfile() {
        const mpIndex = this.props.currentUser.mpIndex;
        const translatedMatchingProfile = {
            exists: true,
            ageRanges: translators.ageRanges(
                this.props.currentUser.matchingProfiles[mpIndex].ageRanges as number[]
            ),
            cals: translators.cals(
                this.props.currentUser.matchingProfiles[mpIndex].cals as number[]
            ),
            orgTypes: translators.orgTypes(
                this.props.currentUser.matchingProfiles[mpIndex].orgTypes as number[]
            ),
            sizes: translators.sizes(
                this.props.currentUser.matchingProfiles[mpIndex].sizes as number[]
            ),
            states: translators.states(
                this.props.currentUser.matchingProfiles[mpIndex].states as number[]
            ),
            trainings: translators.trainings(
                this.props.currentUser.matchingProfiles[mpIndex].trainings as number []
            ),
            traits: translators.traits(
                this.props.currentUser.matchingProfiles[mpIndex].traits as number []
            ),
            locTypes: translators.locTypes(
                this.props.currentUser.matchingProfiles[mpIndex].locTypes as number []
            ),
            edTypes: translators.edTypes(
                this.props.currentUser.matchingProfiles[mpIndex].edTypes as number []
            )
        };
        return translatedMatchingProfile;
    }

    handleFinish = () => {
        this.props.currentUser.updateCurrentMatchProfileOnServer();
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 9
        });
        this.props.store.closeMatchProfCont();
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 9
        });
    }

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    renderStepActions = (step: number) => {
        const { stepIndex } = this.state;
        const mpIndex = this.props.currentUser.mpIndex;

        return (
            <div style={{ margin: '12px 0' }}>
                {stepIndex === 9
                    ? (
                        <div>
                            <RaisedButton
                                label={'Finish'}
                                disableTouchRipple={true}
                                disableFocusRipple={true}
                                primary={true}
                                onTouchTap={this.handleFinish}
                                style={{ marginRight: 12 }}
                                disabled={
                                    (this.props.currentUser.matchingProfiles[mpIndex].traits as number[]).length >
                                        7 ||
                                        (this.props.currentUser.matchingProfiles[mpIndex].traits as number[]).length <
                                            7
                                }
                            />
                            {(this.props.currentUser.matchingProfiles[mpIndex].traits as number[]).length >
                                7 ||
                                (this.props.currentUser.matchingProfiles[mpIndex].traits as number[]).length <
                                    7
                                ? (
                                    <p>
                                        Please choose exactly 7 traits.
                                    </p>
                                )
                                : null}
                        </div>
                    )
                    : (
                        <RaisedButton
                            label={'Next'}
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            primary={true}
                            onTouchTap={this.handleNext}
                            style={{ marginRight: 12 }}
                        />
                    )}
                {step > 0 &&
                    (
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            onTouchTap={this.handlePrev}
                        />
                    )}
            </div>
        );
    }

    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div style={{ maxWidth: 380, maxHeight: 800, margin: 'auto' }}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Your Matching Profile</StepLabel>
                        <StepContent>
                            The power of Montessori Match is finding teachers that will be


                            great cultural fits for your school. Fill out this quick


                            profile and we can start getting you matched up!
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Type of School</StepLabel>
                        <StepContent>
                            <p>
                                What category best matches your school?
                            </p>
                            <OrgTypeSchool />
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Calendar</StepLabel>
                        <StepContent>
                            <p>
                                What calendar does your school use?
                            </p>
                            <CalsSchool />
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>State</StepLabel>
                        <StepContent>
                            <p>
                                What state is your school in?
                            </p>
                            <StatesSchool/>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Location</StepLabel>
                        <StepContent>
                            <p>
                                What kind of area is your school in?
                            </p>
                            <LocTypesSchool />
                            {this.renderStepActions(4)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Size</StepLabel>
                        <StepContent>
                            <p>
                                How many classrooms does your school have?
                            </p>
                            <SizesSchool />
                            {this.renderStepActions(5)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Age Ranges</StepLabel>
                        <StepContent>
                            <p>
                                What age bands does your school teach?
                            </p>
                            <AgesSchool />
                            {this.renderStepActions(6)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Teacher Training</StepLabel>
                        <StepContent>
                            <p>
                                What teacher training standards do you accept?
                            </p>
                            <TrainingsSchool />
                            {this.renderStepActions(7)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Education</StepLabel>
                        <StepContent>
                            <p>
                                What education levels do you accept?
                            </p>
                            <EdTypesSchool />
                            {this.renderStepActions(8)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Culture</StepLabel>
                        <StepContent>
                            <p>
                                Pick seven traits that describe your school culture.
                                (We know you are all of these things!)
                            </p>
                            <TraitsSchool />
                            {this.renderStepActions(9)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished &&
                    (
                        <p style={{ margin: '20px 0', textAlign: 'center' }}>
                            <a
                                href="#"
                                onClick={event => {
                                    event.preventDefault();
                                    this.setState({
                                        stepIndex: 0,
                                        finished: false
                                    });
                                    this.props.currentUser.updateCurrentMatchProfileOnServer();
                                }}
                            >
                                Click here
                            </a> to submit your matching profile!
                        </p>
                    )}
            </div>
        );
    }
}

export const $ = inject('currentUser', 'menus')(
    observer(MatchProfileStepperSchool)
);
