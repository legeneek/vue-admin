import { getToken, removeToken } from '@/utils/token'
import { login } from '@/api/auth'
import { getUserInfo } from '@/api/user'

export default {
  state: {
    name: '',
    roles: [],
    token: getToken()
  },
  mutations: {
    setName: (state, name) => {
      state.name = name
    },
    setRoles: (state, roles) => {
      state.roles = roles
    },
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login ({ commit }, credential) {
      const name = credential.username.trim()
      return new Promise((resolve, reject) => {
        login(name, credential.password).then(response => {
          const d = response.data
          commit('setName', d.username)
          commit('setRoles', d.roles)
          resolve(d)
        }).catch(e => {
          reject(e)
        })
      })
    },
    logout ({ commit }) {
      // front end logout
      return new Promise((resolve, reject) => {
        commit('setName', '')
        commit('setRoles', [])
        commit('setToken', '')
        removeToken()
        resolve()
      })
    },
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const d = response.data
          commit('setName', d.username)
          commit('setRoles', d.roles)
          resolve(d)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}