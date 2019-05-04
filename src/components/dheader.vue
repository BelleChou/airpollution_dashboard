<template>
	<div class="header">
	    <div class="bg-header">
	        <div class="t-title">
	            Air Pollution Dashboard
	        </div> 
			<div >
				<AQI></AQI>
			</div>
	    </div>
	</div>
</template>

<script>
import { defaultCipherList } from 'constants';
import AQI from '@/api/AQI'
export default {
	name: 'dheader',
	components:{
		AQI
	}
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 80px;
    padding: 0 20px;
    .bg-header {
	    width: 100%;
	    height: 80px;
	    background: url(../assets/header.png) no-repeat;
	    background-size: 100% 100%;
	    .t-title {
		    width: 100%;
		    height: 100%;
		    text-align: center;
		    font-size: 2em;
		    line-height: 80px;
		    color: #fff;
		}
	}
}
</style>
