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
          type: 'area',
        },
        title: {
          text: 'アナリティクス',
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
        // ラベルの値を日付にしたい(間隔を1週間毎)
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%b-%e}',
          },
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
          area: {
            // animation: false,
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
        // series: this.series,
        series: [
          {
            name: this.series[0].name,
            data: this.series[0].data,
          },
          {
            name: this.series[1].name,
            data: this.series[1].data,
          },
        ],
      },
    }
  },
}
</script>
