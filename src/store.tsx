import { action, observable, useStrict } from 'mobx';

useStrict(true);

export interface Store {
    id: number;
    memberType: string;
    signInIsOpen: boolean;
    registerIsOpen: boolean;
    matchProfContIsOpen: boolean;
    closeSignIn: () => {};
    openSignIn: () => {};
    closeRegister: () => {};
    openRegister: () => {};
    closeMatchProfCont: () => {};
    openMatchProfCont: () => {};
    setId: (id: number) => {};
    setMemberType: (type: string) => {};
}

export const store = observable({
    id: 0,
    setId: action.bound(function _setId(id: number) {
        store.id = id;
        return {};
    }),
    memberType: 'educator',
    setMemberType: action.bound(function _setMemberType(type: string) {
        store.memberType = type;
        return {};
    }),
    signInIsOpen: false,
    closeSignIn: action.bound(function _closeSignIn() {
        store.signInIsOpen = false;
        return {};
    }),
    openSignIn: action.bound(function _openSignIn() {
        store.signInIsOpen = true;
        return {};
    }),
    registerIsOpen: false,
    closeRegister: action.bound(function _closeRegister() {
        store.registerIsOpen = false;
        return {};
    }),
    openRegister: action.bound(function _openRegister() {
        store.registerIsOpen = true;
        return {};
    }),
    matchProfContIsOpen: false,
    closeMatchProfCont: action.bound(function _closeFillMatchProfile() {
        store.matchProfContIsOpen = false;
        return {};
    }),
    openMatchProfCont: action.bound(function _openFillMatchProfile() {
        store.matchProfContIsOpen = true;
        return {};
    })
});
