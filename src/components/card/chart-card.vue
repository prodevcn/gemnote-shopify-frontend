<template>
    <div class="custom-card">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-content">
          <vue-chartist :data="chartData" :options="chartOptions" type="Bar"></vue-chartist>
        </div>
    </div>
</template>
<script>
import VueChartist from 'v-chartist';
export default {
  components: {
    VueChartist
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
  name: "chart-card",
  created() {
    console.log('[CHART_CARD]:[CREATED]')
  }
}

</script>
<style></style>