import { action, observable, useStrict } from 'mobx';
import { merge } from 'ramda';
import axios, { AxiosResponse } from 'axios';
import * as translators from './Translators';

useStrict(true);

export interface MatchingProfile {
    id?: number;
    ageRanges: number[];
    ageRangesWgt: number;
    cals: number[];
    calsWgt: number;
    orgTypes: number[];
    orgTypesWgt: number;
    locTypes: number[];
    locTypesWgt: number;
    edTypes: number[];
    edTypesWgt: number;
    sizes: number[];
    sizesWgt: number;
    trainings: number[];
    trainingsWgt: number;
    traits: number[];
    traitsWgt: number;
    states: number[];
    statesWgt: number;
}

export interface PartialMatchingProfile {
    id?: number;
    ageRanges?: number[];
    ageRangesWgt?: number;
    cals?: number[];
    calsWgt?: number;
    orgTypes?: number[];
    orgTypesWgt?: number;
    locTypes?: number[];
    locTypesWgt?: number;
    edTypes?: number[];
    edTypesWgt?: number;
    sizes?: number[];
    sizesWgt?: number;
    trainings?: number[];
    trainingsWgt?: number;
    traits?: number[];
    traitsWgt?: number;
    states?: number[];
    statesWgt?: number;
}

export interface TranslatedMatchingProfile {
    ageRanges?: string[];
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
    traits?: string[];
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
    memberType?: string;
    firstName?: string;
    lastName?: string;
    schoolName?: string;
    email?: string;
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
    matchingProfile: MatchingProfile;
    loadInitialUser: (user: User) => {};
    updateMatchingProfile: (newProps: PartialMatchingProfile, index?: number) => {};
    pushToMatchProfileArray: (name: string, value: string | number, index?: number) => {};
    removeFromMatchProfileArray: (name: string, value: string | number, index?: number) => {};
    updateProfile: (profile: Profile) => {};
    clearUser: () => {};
    updateCurrentMatchProfileOnServer(): Promise<AxiosResponse>;
    translatedMatchingProfile(n?: Number): TranslatedMatchingProfile;
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
        memberType: '',
    },

    get matchingProfile() {
        return currentUser.matchingProfiles[currentUser.mpIndex];
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
    }),
    translatedMatchingProfile: action.bound(function _translatedMatchingProfile(index: number = currentUser.mpIndex) {
        const matchingProfile = currentUser.matchingProfiles[index];
        return Reflect.ownKeys(matchingProfile)
            .reduce((obj: TranslatedMatchingProfile, key: string) => {
                if (translators[key]) {
                    obj[key] = (matchingProfile[key] as number[]).map(translators[key]);
                } else {
                    obj[key] = matchingProfile;
                }
                return obj;
            },      {});
    }),
    updateCurrentMatchProfileOnServer: action.bound(function _updateCurrentMatchProfileOnServer() {
        return axios({
            method: 'POST',
            url: 'http://localhost:3001/api/v1/matchProfiles',
            data: currentUser.matchingProfiles[currentUser.mpIndex],
            withCredentials: true,
        });
    })
});
