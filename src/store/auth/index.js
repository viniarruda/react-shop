import { types } from 'mobx-state-tree';

const AuthStore = types
    .model('AuthStore', {
        logged: types.boolean,
    })
    .actions(self => ({
        login(logged) {
            self.logged = true;
        },
        logout(logged) {
            self.logged = false;
        },
    }));

export default AuthStore;