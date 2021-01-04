<template>
  <div>
    <HighchartsVue :options="chartOptions" />
  </div>
</template>

<script>
export default {
  props: {
    series: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  data() {
    return {
      chartOptions: {
        credits: {
          enabled: false,
        },
        chart: {
          type: 'bar',
        },
        title: {
          text: '集客',
          align: 'left',
          style: {
            color: '#1e1e1e',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontSize: '20px',
            letterSpacing: '0px',
          },
        },
        /**
         * 凡例
         */
        legend: {
          // 表示位置
          verticalAlign: 'top',
          // テキスト表示位置
          align: 'right',
          // マージントップ
          itemMarginTop: -50,
          // マージンボトム
          itemMarginBottom: 20,
          // 正円から正方形にする
          symbolRadius: 0,
          // シンボルの間隔
          symbolPadding: 5,
        },
        xAxis: {
          title: {
            text: '',
          },
          labels: {},
        },
        yAxis: {
          title: {
            text: '',
          },
          labels: {},
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            animation: false,
          },
          series: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b> ({point.y:,.0f})',
              softConnector: true,
            },
          },
        },
        series: this.series,
      },
    }
  },
}
</script>
