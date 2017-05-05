import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { inject, observer } from 'mobx-react';
import { Store } from '../Store';
import { CurrentUser } from '../CurrentUser';

export interface Props {
  store: Store;
  currentUser: CurrentUser;
}

class PotentialMatches extends React.Component<Props, undefined> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <List>
                <Subheader>Your Potential Matches</Subheader>
                {this.props.currentUser.matches.length < 1
                    ? (
                        <p>
                            Oh no! There's nobody we think would be a good fit for you yet.
                            More people join all the time, so hang in there and come back soon!
                        </p>
                    )
                    : this.props.currentUser.matches.map(
                            potentialMatch => {
                                const random = Math.random();
                                return (
                                    <div key={random}>
                                        <ListItem
                                            primaryText={potentialMatch.displayName}
                                            secondaryText={
                                                `Match percent: ${potentialMatch.percentage}`}
                                        />
                                        <Divider />
                                    </div>
                                );
                            }
                        )}
            </List>
        );
    }
}

export const $ = inject('currentUser')(observer(PotentialMatches));
