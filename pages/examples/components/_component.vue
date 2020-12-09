<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    {{ routeParams }}
    <component :is="matchComponents" />
    <button
      @click="prevPage"
      class="mr-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg"
    >
      戻る
    </button>
  </div>
</template>

<script>
import BarChart from '~/components/examples/graph/BarChart.vue'
import ColumnChart from '~/components/examples/graph/ColumnChart.vue'
import FunnelChart from '~/components/examples/graph/FunnelChart.vue'
import AreasplineChart from '~/components/examples/graph/AreasplineChart.vue'
import PieChart from '~/components/examples/graph/PieChart.vue'
import BasicColumnChart from '~/components/examples/graph/BasicColumnChart.vue'
import DraggableComponent from '~/components/examples/draggable/DraggableComponent.vue'

export default {
  components: {
    BarChart,
    ColumnChart,
    FunnelChart,
    AreasplineChart,
    PieChart,
    BasicColumnChart,
    DraggableComponent,
  },
  asyncData({ route }) {
    return {
      routeParams: route.params,
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
  methods: {
    prevPage() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
