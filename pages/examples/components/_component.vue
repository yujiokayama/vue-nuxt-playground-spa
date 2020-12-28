<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <component :is="matchComponents" />
    <div class="flex justify-end">
      <button
        class="mt-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg"
        @click="prevPage"
      >
        戻る
      </button>
    </div>
  </div>
</template>

<script>
// チャート
import BarChart from '~/components/examples/graph/BarChart.vue'
import StackingChart from '~/components/examples/graph/StackingChart.vue'
import HorizontalStackingChart from '~/components/examples/graph/HorizontalStackingChart'
import FunnelChart from '~/components/examples/graph/FunnelChart.vue'
import BasicAreaChart from '~/components/examples/graph/BasicAreaChart.vue'
import AreasplineChart from '~/components/examples/graph/AreasplineChart.vue'
import PieChart from '~/components/examples/graph/PieChart.vue'
import DonutChart from '~/components/examples/graph/DonutChart.vue'
import BasicColumnChart from '~/components/examples/graph/BasicColumnChart.vue'
import ScatterPlotChart from '~/components/examples/graph/ScatterPlotChart.vue'
import ParetoChart from '~/components/examples/graph/ParetoChart.vue'
// ドラッグコンポーネント
import DraggableComponent from '~/components/examples/draggable/DraggableComponent.vue'
// エディタ
import TextEditor from '~/components/examples/editor/TextEditor.vue'
import WysiwygEditor from '~/components/examples/editor/WysiwygEditor.vue'
import TinyMCE from '~/components/examples/editor/TinyMCE'
// プログレス
import ProgressBar from '~/components/examples/progress/ProgressBar.vue'
import ProgressCircle from '~/components/examples/progress/ProgressCircle.vue'
// スケルトンスクリーン
import SkeletonScreen from '~/components/examples/skeleton/SkeletonScreen.vue'
// ツリーコンポーネント
import TreeComponent from '~/components/examples/tree/TreeComponent.vue'
// ペジネーション
import Pagination from '~/components/examples/pagination/Pagination.vue'
// タスク
import Trello from '~/components/examples/task/Trello.vue'
// CRUD
import CRUD from '~/components/examples/crud/CRUD.vue'
// Vueの基礎
import EmitAndProps from '~/components/examples/vue/EmitAndProps.vue'

export default {
  components: {
    BarChart,
    StackingChart,
    HorizontalStackingChart,
    FunnelChart,
    BasicAreaChart,
    AreasplineChart,
    PieChart,
    DonutChart,
    BasicColumnChart,
    ScatterPlotChart,
    ParetoChart,
    DraggableComponent,
    TextEditor,
    WysiwygEditor,
    TinyMCE,
    ProgressBar,
    ProgressCircle,
    SkeletonScreen,
    TreeComponent,
    Pagination,
    Trello,
    CRUD,
    EmitAndProps,
  },
  asyncData({ route, app }) {
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
