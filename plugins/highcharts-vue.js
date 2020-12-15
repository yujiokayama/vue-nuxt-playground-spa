import Vue from 'vue'
import Highcharts from 'highcharts'
import HighchartsVue, { Chart } from 'highcharts-vue'

import funnelInit from 'highcharts/modules/funnel'
Vue.use(HighchartsVue)
// コンポーネントとして扱う
Vue.component('HighchartsVue', Chart)
// モジュール拡張
funnelInit(Highcharts)
