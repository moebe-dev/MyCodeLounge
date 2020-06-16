import { extendObservable } from "mobx";

/**
 * UserStores
 */
class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: "",
        });
    }
}

export default new UserStore();
