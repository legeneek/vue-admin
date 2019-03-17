import { getUsers } from '@/api/users'

export default {
  state: {
    list: [],
  },
  mutations: {
    setList: (state, users) => {
      state.list = users
    }
  },
  actions: {
    getUserList ({ commit }) {
      return new Promise((resolve, reject) => {
        getUsers().then(response => {
          const d = response.data
          commit('setList', d)
          resolve(d)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}