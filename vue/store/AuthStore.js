import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

const userLocal = JSON.parse(localStorage.getItem('user'));
const initialState = userLocal
  ? { status: { loggedIn: true }, userLocal }
  : { status: { loggedIn: false }, userLocal: null };

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const AuthStore = defineStore('auth', {
  state: () => {
    /**
     * @type {null|object}
     * @param user {null|object}
     * @param user.user {string}
     * @param user.token {string}
     * @param user.firstName {string}
     * @param user.lastName {string}
     * @param user.roles {array}
     */
    const user = ref(initialState.userLocal ? initialState.userLocal.user : null);
    const token = ref(initialState.userLocal ? initialState.userLocal.token : null);
    const firstName = ref(initialState.userLocal ? initialState.userLocal.firstName : null);
    const lastName = ref(initialState.userLocal ? initialState.userLocal.lastName : null);
    const roles = reactive(initialState.userLocal ? initialState.userLocal.roles : []);
    const loggedIn = ref(initialState.userLocal ? initialState.status.loggedIn : null);

    return {

      user,
      lastName,
      firstName,
      token,
      roles,
      loggedIn

    };
  },

});
