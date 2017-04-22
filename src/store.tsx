import { action, observable } from 'mobx';

export class Store {
    // menu observables
    @observable public signInIsOpen = false;
    @observable public registerIsOpen = false;
    @observable public matchProfContIsOpen = false;

    // user observables
    @observable public id: number | null = null;
    @observable public memberType: string | null = null;

    // menu actions
    @action closeSignIn() {
        this.signInIsOpen = false;
    }
    @action openSignIn() {
        this.signInIsOpen = true;
    }
    @action closeRegister() {
        this.registerIsOpen = false;
    }
    @action openRegister() {
        this.registerIsOpen = true;
    }
    @action closeFillMatchProfile() {
        this.matchProfContIsOpen = false;
    }
    @action openFillMatchProfile() {
        this.matchProfContIsOpen = true;
    }
    
    // user actions
    @action clearUser() {
        this.id = null;
        this.memberType = null;
    }
}
