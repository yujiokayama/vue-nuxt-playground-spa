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
          type: 'spline',
          // type: 'areaspline',
        },
        title: {
          text: 'アナリティクス',
          align: 'left',
          margin: 40,
          style: {
            color: '#1e1e1e',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontSize: '20px',
          },
        },
        /**
         * 凡例
         */
        legend: {
          // 表示・非表示
          enabled: false,
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
        // ラベルの値を日付にしたい(間隔を1週間毎)
        xAxis: {
          categories: ['01/01', '01/08', '01/15', '01/22', '01/29'],
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
          spline: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        series: this.series,
      },
    }
  },
  watch: {
    series: {
      handler(newSeries, oldSeries) {
        this.chartOptions.series = newSeries
      },
      deep: true,
    },
  },
}
</script>
