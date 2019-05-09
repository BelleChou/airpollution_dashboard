<template>
<div class="map">
    <div id="mapcity"></div>
</div>
</template>
<style>
.map{
    height:100%;
    width:100%;
}
#mapcity{
    height:100%;
    width:100%;
}
</style>
<script>
import {mapActions,mapGetters} from 'vuex';
import china from 'echarts/map/js/china'; 
export default {
    computed:{
        ...mapGetters(['cityAQIData','geoCoordMap'])
    },
    mounted(){
        this.$store.dispatch('getCityAQIData');
    },
    watch:{
        cityAQIData(){
            var myChartMap = this.$echarts.init(document.getElementById('mapcity'));
            myChartMap.setOption({
            // backgroundColor: '#e6e2e4',
            title : {
                text: 'AQI in main cities of China',
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
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['订单量']
            },
            visualMap: {
                min: 200,
                max: 35000,
                bottom: 50,
                splitNumber: 5,
                inRange: {
                color: ['#255B78', '#2A7484', '#2F9696', '#3BBCB0', '#51D4EB']
                },
                textStyle: {
                color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                emphasis: {
                    show: false
                }
            },
            zoom: 1,
            top: 50,
            itemStyle: {
              normal: {
                color: '#3c4247',
                opacity: 0.6,
                borderColor: 'rgba(255, 255, 255, 0.35)'
              },
              emphasis: {
                color: '#2a333d'
              }
            }
          },
            // 工具盒，可以保存图片
            toolbox: {
                show: true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
                }
            },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [{
                    name: '标签1',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbolSize: function(val) {
                    return val[2] / 500;
                },
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data:this.cityAQIData
            }]
        });
        
        }
       
    }
}
</script>