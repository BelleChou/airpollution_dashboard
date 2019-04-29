<script>
  import { Line } from 'vue-chartjs'
  import { mapState ,mapActions, mapGetters} from 'vuex'
  import * as COLORS from '@/colors.js'

  export default {
    extends: Line,

    props: {
        datasets: {
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
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
        this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    
        this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
        this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
        this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        
        this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
        this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
        this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');
    this.update()
  },
  methods: {
    update () {
      // Overwriting base render method with actual data.
      let data = {
        datasets: this.datasets,
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
    datasets:{
      handler(){
        console.log("kkkkkkkkkkkkk"+this.datasets)
        this.update();
      },
      deep:true,
  
    }
  }


    }

</script>