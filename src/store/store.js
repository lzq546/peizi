import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  yongjinname: '的撒'
}

const mutations = {
  Yongjin_name (state, val) {
    state.yongjinname = val
  }
}

export default new Vuex.Store({
  state,
  mutations
})
