import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import users from '@/store/modules/users'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    users
  },
  getters
})

export default store