<template>
    <vue-chartist :data="chartData" :options="chartOptions" type="Pie"></vue-chartist>
</template>
<script>
import VueChartist from 'v-chartist';

export default {
    name: "doughnut-cahrt",
    components: {
        VueChartist,
    },
    props: {
        chartData: {
            type: Object,
            default: () => {
                return {
                    labels: [],
                    series: []
                };
            }
        },
        chartOptions: {
            type: Object,
            default: () => {
                return {};
            }   
        },
    },

  mounted () {
    console.log('[CHART]:[MOUNTED]')
  }
}
</script>
<style></style>