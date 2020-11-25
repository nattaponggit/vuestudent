import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    CLEAR_COUNT(state, value) {
      state.count = value;
    },
    ADD_COUNT(state, value) {
      state.count = state.count + value;
    },
  },
  actions: {
    clear({ commit }) {
      commit("CLEAR_COUNT", 0);
    },
    add({ commit }) {
      commit("ADD_COUNT", 1);
    },
  },
  modules: {},
});
