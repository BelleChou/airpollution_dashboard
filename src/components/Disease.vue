<template>
    <div class="disease">
        <div id="wordCloud"></div>
    </div>
</template>
<style>
.disease{
    height:100%;
    width:100%;
}
#wordCloud{
    height:100%;
    width:100%;
}
</style>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.$store.dispatch('getDiseaseData')
    },
    computed:{
        ...mapGetters(['diseaseData'])
    },
    watch:{
        diseaseData(val){
            let wordCloud = this.$echarts.init(document.getElementById('wordCloud'));
            function createRandomItemStyle() {
                return {
                    normal: {
                        color: 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')'
                    }
                };
            }
            
            let option = {
                title : {
                    text: 'Disease Trends under air pollution',
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
                tooltip: {
                    show: true
                },
                series: [{
                    name: 'Disease Trends Under Air Polluiton',
                    type: 'wordCloud',
                    size: ['80%', '80%'],
                    sizeRange: [6, 150],
                    textRotation : [0, 45, 90, -45],
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 20
                    },
                        textStyle: {//文字样式设置
                        normal: {
                            color: function() {//颜色
                                return 'rgb(' + [//返回随机生成的颜色
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {//鼠标划入样式
                            shadowBlur: 10,//文字阴影模糊度
                            shadowColor: '#333'//文字阴影颜色
                        }
                    },
                    data:this.diseaseData
                }]
            }
            wordCloud.setOption(option)
        }
        
    }
}
</script>
    
    