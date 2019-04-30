<template>
    <div class="city-linechart">
        <div class="line" v-for="(lineitem,index) in lineList">
            <h2>{{lineitem.title}}</h2>
            <base-line :dataAQI="lineitem.dataAQI" :dataPosts="lineitem.dataPosts"></base-line>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
.line h2 {
      margin-top: 0;
      padding: 15px 0;
      color:  rgba(255, 0,0, 0.5);
      border-bottom: 1px solid #323d54;
      line-height: 100px;
    }
</style>


<script>
import BaseLine from './line.vue'
import {mapGetters} from 'vuex'
export default{
    components:{
        BaseLine
    },
    computed:{
        ...mapGetters(['lineList'])
    },
    mounted(){
        this.$store.dispatch('getLineList')
    }
}
</script>