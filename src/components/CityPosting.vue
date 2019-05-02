<template>
    <div class="city-linechart">
        <el-tabs>
            <el-tab-pane class="line" v-for="(lineitem,index) in lineList" :label="lineitem.title" :key="index">
                <!-- <h2>{{lineitem.title}}</h2> -->
                <base-line class="baseline" :dataAQI="lineitem.dataAQI" :dataPosts="lineitem.dataPosts"></base-line>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>
<style lang="scss" scoped>
.baseline{ //canvas的外层要设置宽高才行
    height:500px;
    margin:50px 20px;
}
.line{
    height:100%;
}
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