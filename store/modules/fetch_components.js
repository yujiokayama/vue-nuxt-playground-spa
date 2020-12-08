// import axios from 'axios'

export const state = () => ({
  componentsData: [],
})

export const getters = {
  getComponentsData(state) {
    return state.componentsData
  },
}

export const mutations = {
  setComponentsData(state, tableData) {
    state.componentsData = tableData
  },
}

export const actions = {
  fetchComponentsData({ commit }, data) {
    commit('setComponentsData', data)
  },
}
