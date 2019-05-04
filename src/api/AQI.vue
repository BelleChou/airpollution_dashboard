<template>
    <div class="weather-box">
            <div class="left-box bg">
                <p class="time">{{nowTime}}</p>
            </div>
            <div class="right-box bg">
                <p class="aqi"><span>AQI:</span>{{cityaqi}}</p>
                <p class="city"><img :src="locationIcon">  {{city}}</p>
                
            </div>
            
    </div>
</template>
<script>
import locationIcon from '@/assets/location_on.png'
export default{
    data(){
        return{
            cityaqi:0,
            nowTime:0,
            city:null,
            locationIcon
        }
    },
    mounted(){
        this.getLocation();
        this.getAQI();
    },
    methods:{
        getAQI(){
            axios.get('/feed/here/',{
                params:{
                    token:'ed3c2dc0652eab40c99028ca006a72a68ff2d303'
                }}
            ).then((res)=>{
                this.cityaqi = res.data.data.aqi;
                
                this.nowTime = res.data.data.debug.sync;
                console.log(res.data.data)
            })
        },
        getLocation(){
            axios.get('/location/ip',{
                params:{
                    ak:'wKln3QG3LFd7rh6FF3zdf3tFB7aQaEgQ'
                }}
            ).then((res)=>{
                console.log(res.data);
                this.city = res.data.content.address_detail.city;
                return res.data;
            })
        }
    }
    
}
    
</script>

<style lang="scss" scoped>

.bg{
    background:url(../assets/border_bg01.png) no-repeat;
    background-size: 220px 80px;
    padding:10px;
    
}
.left-box{
    width:200px;
    height:60px;
    position:absolute;
    top:20px;
    display:flex;
    flex-direction:column;
    justify-content: center;

}
.right-box{
    width:200px;
    height:60px;
    top:20px;
    position:absolute;
    right:10px;
}

.aqi,.city{
    color: #cdf7f1;
    font-size: 1.3rem;
    font-weight: 500;
    text-shadow:#fff 1px 0px 1px;
    position:relative;
}
.time{
    color:#cdf7f1;
}

</style>
