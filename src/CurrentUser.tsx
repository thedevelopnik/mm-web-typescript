import { action, observable } from 'mobx';
import { merge } from 'ramda';

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

export interface CurrentUser {
    matchingProfile: MatchingProfile;
    profile: Profile | null;
    updateMatchingProfile: () => {};
}

export const currentUser: CurrentUser = observable({
    profile: {
        displayName: '',
        name: '',
        active: true,
        avatarUrl: '',
        description: '',
    },
    matchingProfile: {
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
    },

    updateMatchingProfile: action.bound(function _updateMatchingProfile(newProps: MatchingProfile) {
        currentUser.matchingProfile = merge(currentUser.matchingProfile, newProps);
        return {};
    }),
    pushToMatchProfileArray: action.bound(function _pushToMatchProfileArray(name: string, value: string | number) {
        currentUser.matchingProfile[name].push(value);
        return {};
    }),
    removeFromMatchProfileArray: action.bound(
        function _removeFromMatchProfileArray(name: string, value: string | number) {
            currentUser.matchingProfile[name] = currentUser.matchingProfile[name]
                .filter((e: string | number) => e !== value);
            return {};
    }),
    updateProfile: action.bound(function _setCurrentUserProfile(profile: Profile) {
        currentUser.profile = merge(currentUser.profile, profile);
        return {};
    }),
    clearUser: action.bound(function _clearUser() {
        currentUser.profile = null;
        return {};
    })
});
