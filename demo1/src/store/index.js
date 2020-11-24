import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    SET_RESET(state, value){
      state.count = value
    }
  },
  actions: {
    clear({commit}){
      this.state.count = 0  
      commit("SET_RESET", 1)

    }
  },
  modules: {
  }
})
