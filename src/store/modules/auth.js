import authApi from '@/api/auth';

export default {
  namespaced: true,
  state: () => ({
    isSubmitting: false,
    errors: null,
    user: null,
    isLoggedIn: null,
  }),
  mutations: {
    start(state) {
      state.isSubmitting = true;
      state.errors = null;
    },
    finish(state) {
      state.isSubmitting = false;
    },
    fail(state, errors) {
      state.errors = errors;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearErrors(state) {
      state.errors = null;
    },
  },
  actions: {
    async register({ commit }, credentials) {
      commit('start');

      try {
        const response = await authApi.register(credentials);
        const { user } = await response.data;

        commit('setUser', user);
      } catch ({ response }) {
        commit('fail', response.data.errors);
      } finally {
        commit('finish');
      }
    },
    async login({ commit, state }, credentials) {
      commit('start');

      try {
        const response = await authApi.login(credentials);
        const { user } = await response.data;

        commit('setUser', user);
      } catch ({ response }) {
        commit('fail', response.data.errors);
      } finally {
        commit('finish');
      }
    },
  },
};
