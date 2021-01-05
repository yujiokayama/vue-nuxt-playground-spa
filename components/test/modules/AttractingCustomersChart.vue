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
          categories: this.series[0].data.map((data) => {
            return data.name
          }),
          title: {
            text: null,
          },
          labels: {
            style: {
              color: '#1e1e1e',
              fontFamily: 'Noto Sans JP, sans-serif',
              fontSize: '13px',
              letterSpacing: '0px',
            },
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
          bar: {
            // グラフに文字を積み重ねる
            stacking: 'normal',
            // アニメーション
            animation: true,
            // 凡例のマーカーの色
            color: '#4F7DF0',
          },
          series: {
            dataLabels: {
              enabled: true,
              crop: false,
              // 描画されるデータの表示形式
              format: '{point.y:,.0f}',
              style: {
                color: '#ffffff',
                fontFamily: 'Noto Sans JP, sans-serif',
                fontWeight: 'normal',
                fontSize: '12px',
                letterSpacing: '1px',
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
