import * as React from 'react';
import { inject, observer } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { $ as MatchProfileStepperSchool } from '../stepper/MatchProfStepSchool';
import { $ as MatchProfileStepperTeacher } from '../stepper/MatchProfStepTeacher';
import { Store } from '../../../Store';
import { CurrentUser } from '../../../CurrentUser';

export interface Props {
  store: Store;
  currentUser: CurrentUser;
}

const MatchProfileContainer = function MatchProfileContainer(props: Props) {
    const actions = [
        (
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={props.store.closeMatchProfCont}
            />
        )
    ];

    return (
        <Dialog
            title="Fill out your matching profile"
            actions={actions}
            modal={false}
            open={props.store.matchProfContIsOpen}
            onRequestClose={props.store.closeMatchProfCont}
            autoScrollBodyContent={true}
        >
            {props.currentUser.profile.memberType === 'school'
                ? (
                    <MatchProfileStepperSchool
                        updateProfile={props.currentUser.updateProfile}
                    />
                )
                : (
                    <MatchProfileStepperTeacher
                        updateProfile={props.currentUser.updateProfile}
                    />
                )}
        </Dialog>
    );
};

export const $ = inject('currentUser', 'menus')(
    observer(MatchProfileContainer)
);
