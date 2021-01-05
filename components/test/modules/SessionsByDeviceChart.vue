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
        /**
         * クレジットの表示
         */
        credits: {
          // 非表示にする
          enabled: false,
        },
        /**
         * チャートタイプ
         */
        chart: {
          type: 'pie',
        },
        /**
         * タイトル
         */
        title: {
          text: 'デバイス別セッション数',
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
          verticalAlign: 'middle',
          // テキスト表示位置
          align: 'right',
          // マージントップ
          itemMarginTop: 10,
          // マージンボトム
          itemMarginBottom: 0,
          // 正円から正方形にする
          symbolRadius: 0,
          // シンボルの間隔
          symbolPadding: 5,
          // ラベルにデータを表示する
          labelFormat: '{name}:<b>{y}%</b>',
          itemStyle: {
            color: '#1e1e1e',
            fontWeight: 'normal',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontSize: '17px',
          },
          // labelFormatter() {
          //   return `${this.name} ${this.y}%`
          // },
        },
        /**
         * 描画オプション
         */
        plotOptions: {
          pie: {
            showInLegend: true,
            // 円グラフの内側のサイズ
            innerSize: '60%',
            // ラベルの表示・非表示
            dataLabels: {
              enabled: false,
            },
            // ボーダーを無くす
            borderWidth: 0,
          },
        },
        /**
         * 描画するデータ
         */
        series: this.series,
        /**
         * ツールチップ
         */
        tooltip: {
          // カーソルを置いたときに吹き出し表示
          enabled: true,
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
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
