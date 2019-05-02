<template>
    
</template>
<script>
export default{
    mounted(){
        this.getLocation();
    },
    methods:{
        getLocation(){
            axios.get('/location/ip',{
                params:{
                    ak:'wKln3QG3LFd7rh6FF3zdf3tFB7aQaEgQ'
                }}
            ).then((res)=>{
                console.log(res.data);
                return res.data;
            })
        }
    }
    
}
    
</script>
