<script>
  import { Line } from 'vue-chartjs'
  import { mapState ,mapActions, mapGetters} from 'vuex'
  import * as COLORS from '@/colors.js'

  export default {
    extends: Line,

    props: {
        dataAQI: {
          type: Array,
          default: () => []
        },
        dataPosts: {
          type: Array,
          default: () => []
        },
        title: {
          type: String,
          default: 'Donut'
        },
        name:{
          type:String
        }

    }, 
    mounted () {
      this.update()
    },
    methods: {
      update () {
        // Overwriting base render method with actual data.
        let data = {
          datasets:  [{
                            label: "Data One",
                            borderColor: "#FC2525",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "white",
                            backgroundColor:"#FC2525",
                            data: this.dataAQI
                        },
                        {
                            label: "Data Two",
                            borderColor: "#05CBE1",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "white",
                            backgroundColor:"#05CBE1",
                            data: this.dataPosts
                        }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        }

        let options = {
          legend:{
            display: false,
          },
          responsive: true, 
          maintainAspectRatio: false
        }

        this.renderChart(data,options);
      }


    },
    watch: {
      dataAQI(V){
       
          console.log("kkkkkkkkkkkkkAQI")
          this.update();
  
      },
      dataPosts(V){
        
          console.log("kkkkkkkkkkkkkPOST")
          this.update();
        

      }
    }


    }

</script>