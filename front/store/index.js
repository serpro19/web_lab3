import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    actions: {
        register({ commit }, user) {
            commit('setUser', user);
        },
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => !!state.user,
        user: state => state.user
    }
});

export default store;
