<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        v-for="component in relatedComponents"
        :key="component.title"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <nuxt-link :to="component.path">
          <div class="border-2 border-gray-300 rounded-xl bg-white mr-5">
            <div class="p-5">
              <h1 class="text-2xl font-bold text-green-800 py-2">
                {{ component.title }}
              </h1>
            </div>
          </div>
        </nuxt-link>
      </div>
      <!-- //Column -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  async asyncData({ route, store }) {
    await store.dispatch('modules/fetch_components/fetchComponentsData')

    // 該当するスラッグのコンポーネントリストを返す
    const matchComponentsList = () => {
      return store.getters['modules/fetch_components/getComponentsData'].map(
        (item) => {
          return item.components
        }
      )
    }

    console.log(matchComponentsList())

    return {
      relatedComponents: matchComponentsList().flat(),
    }
  },
  computed: {
    ...mapGetters({
      getComponentsData: 'modules/fetch_components/getComponentsData',
    }),
  },
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
