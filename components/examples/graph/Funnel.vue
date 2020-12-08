<template>
  <section class="charts">
    <h3>Funnel Chart</h3>
    <vue-highcharts :options="options" ref="chart"></vue-highcharts>
  </section>
</template>
<script>
import VueHighcharts from 'vue2-highcharts'

const data = {
  chart: {
    type: 'funnel',
  },
  title: {
    text: 'Sales funnel',
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b> ({point.y:,.0f})',
        softConnector: true,
      },
      center: ['40%', '50%'],
      neckWidth: '30%',
      neckHeight: '25%',
      width: '80%',
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: 'Unique users',
      data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846],
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              dataLabels: {
                inside: true,
              },
              center: ['50%', '50%'],
              width: '100%',
            },
          },
        },
      },
    ],
  },
}
export default {
  components: {
    VueHighcharts,
  },
  data() {
    return {
      options: data,
    }
  },
}
</script>
