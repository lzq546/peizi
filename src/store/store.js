import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  index_name: ''
}

const mutations = {
  Index_name (state, val) {
    state.index_name = val
  }
}

export default new Vuex.Store({
  state,
  mutations
})
