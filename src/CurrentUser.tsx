import { action, observable, useStrict } from 'mobx';
import { merge } from 'ramda';

useStrict(true);

export interface MatchingProfile {
    ageRanges?: number[];
    ageRangesWgt?: number;
    cals?: string[];
    calsWgt?: number;
    orgTypes?: string[];
    orgTypesWgt?: number;
    locTypes?: string[];
    locTypesWgt?: number;
    edTypes?: string[];
    edTypesWgt?: number;
    sizes?: string[];
    sizesWgt?: number;
    trainings?: string[];
    trainingsWgt?: number;
    traits?: number[];
    traitsWgt?: number;
    states?: string[];
    statesWgt?: number;
}

export interface Profile {
    displayName?: string;
    name?: string;
    active?: boolean;
    avatarUrl?: string;
    description?: string;
}

export interface Match {
    id: number;
    percentage: number;
    myConfirmation: boolean;
    theirConfirmation: boolean;
    displayName: string;
    avatarUrl: string;
    description: string;
}

export interface User {
    matchingProfiles: MatchingProfile[];
    profile: Profile;
    matches: Match[];
}

export interface CurrentUser extends User {
    mpIndex: number;
    profile: Profile;
    loadInitialUser: (user: User) => {};
    updateMatchingProfile: (newProps: MatchingProfile, index?: number) => {};
    pushToMatchProfileArray: (name: string, value: string | number, index?: number) => {};
    removeFromMatchProfileArray: (name: string, value: string | number, index?: number) => {};
    updateProfile: (profile: Profile) => {};
    clearUser: () => {};
}

export const currentUser: CurrentUser = observable({
    mpIndex: 0,
    matches: [],
    matchingProfiles: [{
        ageRanges: [],
        ageRangesWgt: 10,
        cals: [],
        calsWgt: 10,
        orgTypes: [],
        orgTypesWgt: 10,
        locTypes: [],
        locTypesWgt: 10,
        edTypes: [],
        edTypesWgt: 10,
        sizes: [],
        sizesWgt: 10,
        trainings: [],
        trainingsWgt: 10,
        traits: [],
        traitsWgt: 10,
        states: [],
        statesWgt: 10
    }],
    profile: {
        displayName: '',
        name: '',
        active: true,
        avatarUrl: '',
        description: '',
    },

    loadInitialUser: action.bound(function _loadInitialUser({ matches, matchingProfiles, profile}: User) {
        currentUser.matches = matches;
        if (matchingProfiles.length) {
            currentUser.matchingProfiles = matchingProfiles;
        }
        currentUser.profile = profile;
        return {};
    }),

    updateMatchingProfile: action.bound(function _updateMatchingProfile(newProps: MatchingProfile, index: number = 0) {
        currentUser.matchingProfiles[index] = merge(currentUser.matchingProfiles[index], newProps);
        return {};
    }),

    pushToMatchProfileArray: action.bound(
        function _pushToMatchProfileArray(name: string, value: string | number, index: number = 0) {
            currentUser.matchingProfiles[index][name].push(value);
            return {};
        }
    ),
    removeFromMatchProfileArray: action.bound(
        function _removeFromMatchProfileArray(name: string, value: string | number, index: number = 0) {
            currentUser.matchingProfiles[index][name] = currentUser.matchingProfiles[index][name]
                .filter((e: string | number) => e !== value);
            return {};
        }
    ),
    updateProfile: action.bound(function _setCurrentUserProfile(profile: Profile) {
        currentUser.profile = merge(currentUser.profile, profile);
        return {};
    }),
    clearUser: action.bound(function _clearUser() {
        currentUser.profile = {
            displayName: '',
            name: '',
            active: true,
            avatarUrl: '',
            description: '',
        };
        return {};
    })
});
