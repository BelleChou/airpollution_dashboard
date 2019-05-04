<template>
    <div class="city-linechart">
        <h2>Positng and </h2>
        <el-tabs>
            <el-tab-pane class="line" v-for="(lineitem,index) in lineList" :label="lineitem.title" :key="index">
                <base-line class="baseline" :dataAQI="lineitem.dataAQI" :dataPosts="lineitem.dataPosts"></base-line>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>
<style lang="scss" scoped>
.el-tabs{
    margin-left:10px;
    margin-right:10px;
}
.city-linechart{
    height:100%;
    width:100%;
    h2{
        color:#ccc;
                    //字体风格,'normal','italic','oblique'
        font-style:'normal';
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        font-weight:bold;
                    //字体系列
        font-family:sans-serif;
                    //字体大小
        font-size:30;
    }
}
.baseline{ //canvas的外层要设置宽高才行
    height:300px;
    width:100%;
    margin:50px 20px;
}
.baseline{
    background: #212733;
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
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