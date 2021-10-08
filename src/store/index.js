import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top: 0
  },
  mutations: {
    setTop(state, data) {
      state.top = data
    }
  },
  actions: {},
  modules: {}
})
