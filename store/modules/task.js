export const state = () => ({
  tasks: [],
})

export const getters = {
  getTasksData(state) {
    return state.tasks
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
