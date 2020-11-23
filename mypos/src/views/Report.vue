<template lang="html">
  <v-container>
    <v-card>
      <v-btn class="success" @click="fillData()">Refresh</v-btn>
      <LineChart style="height: 300px;" :chartData="datacollection" />
      <BarChart style="height: 300px;" :chartData="datacollection" />
    </v-card>
  </v-container>
</template>

<script lang="js">
import LineChart from "@/components/charts/LineChart.vue";
import BarChart from "@/components/charts/BarChart.vue";

  export default  {
    name: 'report',
      components: {
      LineChart,
      BarChart
    },
    mounted () {
        this.fillData()
    },
    data () {
      return {
        datacollection: null
      }
    },
    methods: {
     fillData () {
         this.datacollection = {
          //Data to be represented on x-axis
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: '2019',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: this.getRandomInt(),

              borderColor: [
                '#43A047'
               ],
               borderWidth: 2,
               fill: true,
               backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            }
          ]};

      },
      getRandomInt () {
        let randoms = []
        for (let index = 0; index < 12; index++) {
          randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5)
        }
        return randoms
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.report {
}
</style>
