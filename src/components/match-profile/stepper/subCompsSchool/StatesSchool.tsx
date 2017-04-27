import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import { inject, observer } from 'mobx-react';
import { CurrentUser } from '../../../../CurrentUser';

interface Props {
    currentUser: CurrentUser;
}

interface State {
    currentStates: number[];
    stateMap: { [key: string]: number };
}

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class StatesSchool extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            currentStates: [],
            stateMap: {
                AK: 0,
                AL: 1,
                AR: 2,
                AZ: 3,
                CA: 4,
                CO: 5,
                CT: 6,
                DC: 7,
                DE: 8,
                FL: 9,
                GA: 10,
                HI: 11,
                IA: 12,
                ID: 13,
                IL: 14,
                IN: 15,
                KS: 16,
                KY: 17,
                LA: 18,
                MA: 19,
                MD: 20,
                ME: 21,
                MI: 22,
                MN: 23,
                MO: 24,
                MS: 25,
                MT: 26,
                NC: 27,
                ND: 28,
                NE: 29,
                NH: 30,
                NJ: 31,
                NM: 32,
                NV: 33,
                NY: 34,
                OH: 35,
                OK: 36,
                OR: 37,
                PA: 38,
                RI: 39,
                SC: 40,
                SD: 41,
                TN: 42,
                TX: 43,
                UT: 44,
                VA: 45,
                VT: 46,
                WA: 47,
                WI: 48,
                WY: 49
            }
        };
    }

    componentWillMount() {
        const storeStates = this.props.currentUser.matchingProfile.states as number[];
        this.setState({ currentStates: storeStates });
    }

    handleRequestDelete(index: number) {
        const withoutRemovedState = this.state.currentStates.filter(st => {
            return st !== index;
        });
        this.setState({ currentStates: withoutRemovedState });
        this.props.currentUser.removeFromMatchProfileArray('states', index);
    }

    handleNewRequest = (chosenRequest: number) => {
        const states = this.state.currentStates;
        states.push(this.state.stateMap[chosenRequest]);
        this.setState({ currentStates: states });
        this.props.currentUser.pushToMatchProfileArray('states', this.state.stateMap[chosenRequest]);
    }

    render() {
        const stateNameList = Object.keys(this.state.stateMap);
        return (
            <div>
                {this.state.currentStates.map(stateIndex => {
                    return (
                        <Chip
                            key={stateIndex}
                            onRequestDelete={() =>
                                this.handleRequestDelete(stateIndex)}
                        >
                            {stateNameList[stateIndex]}
                        </Chip>
                    );
                })}
                <AutoComplete
                    hintText="Two Letter Abbrev (i.e. CO)"
                    dataSource={Object.keys(this.state.stateMap)}
                    onNewRequest={this.handleNewRequest}
                />
            </div>
        );
    }
}

export const $ = inject('currentUser')(observer(StatesSchool));
