<template>
    <div class="city-line">
        <line v-for="(lineitem,index) in lineitems" :line="lineitem"></line>
    </div>
</template>
<script>
import line from './line.vue'
</script>