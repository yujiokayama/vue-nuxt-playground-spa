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
  async fetchComponentsData({ commit }) {
    const url = '/apis/components.json'
    const response = await this.$axios.$get(url)
    commit('setComponentsData', response)
  },
}
