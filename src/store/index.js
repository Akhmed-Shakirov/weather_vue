import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'Almaty',
    key: '573b4ca037418059fc17bc9f5cc37939'
  },
  getters: {
    city(state) {
      return state.city
    },
    key(state) {
      return state.key
    }    
  },
  mutations: {
    set_city: (state, id) => {
      state.city = id;
    }
  },
  plugins: [createPersistedState()]
})
