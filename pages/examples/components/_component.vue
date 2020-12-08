<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <component :is="matchComponents" />
  </div>
</template>

<script>
import BarChart from '~/components/examples/graph/BarChart.vue'
import FunnelChart from '~/components/examples/graph/Funnel.vue'

export default {
  components: {
    BarChart,
    FunnelChart,
  },
  async asyncData({ route }) {
    return {
      routeParams: await route.params,
    }
  },
  computed: {
    matchComponents() {
      return (
        this.routeParams.component.charAt(0).toUpperCase() +
        this.routeParams.component.slice(1)
      )
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
