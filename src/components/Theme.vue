<style lang="scss" scoped>
.main{
    width: 800px;height:600px;
}
</style>

<template>
<div class="theme">
    <!-- <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header> -->
    <div class="main" ></div>
</div>

</template>
<script>
import header from './header.vue';

// import axios from 'axios'

export default {
    data(){
        return{
            name:"Theme",
            myChart:{},
            option:{}
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
    let option = {
        title : {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
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
                name:'面积模式',
                type:'pie',
                radius : [30, 110],
                center : ['75%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'dkjaslkdjksalfjklsafjkslajfklajfklasjfkjklajflksj'},
                    {value:5, name:'rose2'},
                    {value:15, name:'rose3'},
                    {value:25, name:'rose4'},
                    {value:20, name:'rose5'},
                    {value:35, name:'rose6'},
                    {value:30, name:'rose7'},
                    {value:40, name:'rose8'}
                ]
            }
        ]
    };
            
            var myChart = this.$echarts.init(document.querySelector('.theme .main'));
            myChart.setOption(option)
        }
    },
    components:{
    'v-header':header,
    },
    
}


</script>