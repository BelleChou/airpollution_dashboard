<style lang="scss" scoped>
.theme{
    height:100%;
    width:100%;
}
.main{
    width: 100%;
    height: 100%;
}
</style>

<template>
<div class="theme">
    <div class="main" ></div>
</div>

</template>
<script>
import header from './header.vue';
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            name:"Theme",
            myChart:{},
            legendArr: [],
        }
    },
    mounted(){
        this.$store.dispatch('getThemeData');
       
    },
    computed:{
        ...mapGetters(['themeData'])
    },
    watch:{
        themeData(v){
                let option={
                title : {
                    text: 'Theme of postings',
                    x:'center',
                    textStyle:{
                        color:'#ccc',
                        //字体风格,'normal','italic','oblique'
                        fontStyle:'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight:'bold',
                        //字体系列
                        fontFamily:'sans-serif',
                        //字体大小
                　　　　 fontSize:30
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    textStyle:{
                        //字体风格,'normal','italic','oblique'
                        fontStyle:'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight:'normal',
                        //字体系列
                        fontFamily:'sans-serif',
                        //字体大小
                　　　　 fontSize:14
                    },
                    orient: 'vertical',
                    left: 'left',
                    top:'10%',
                    data:['Disclosure of air pollution',
                    'Dissatisfaction with the poor air quality',
                    'Report of behavioral changes',
                    'Health concern for his or her health',
                    'Banter about the poor air quality','Evaluation of government policy',
                    'Appeal to the government to reduce air pollution']
                    
                },
                toolbox: {
                    text:'dsdd',
                    show : true,
                    feature : {
                        mark : {show: true},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'Theme of Postings',
                        type:'pie',
                        radius : [30, 110],
                        center : ['50%', '60%'],
                        roseType : 'area',
                        data:this.themeData
                    }
                ]
                }
                
            
            this.myChart = this.$echarts.init(document.querySelector('.theme .main'));
            this.myChart.setOption(option);
            
        }
    },
    components:{
    'v-header':header,
    },
    
}


</script>