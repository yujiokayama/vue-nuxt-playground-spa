export default async ({ store }) => {
  const components = store.getters['modules/fetch_components/getComponentsData']
  if (components.length === 0) {
    await store.dispatch('modules/fetch_components/fetchComponentsData')
  }
}
