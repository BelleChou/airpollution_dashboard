<template>
    <span>{{title}}</span>
</template>
<script>
export default{
    props: {
        title: {
          type: String,
          default: 'Donut'
        }
    },
    watch:{
        title(v){
            console.log("k111111111111")
        }
    }
}
</script>
