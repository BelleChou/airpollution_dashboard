<template>
  <div class="page">
    <div class="container">
      <div class="dashboard-header">
        <img :src="HeaderLogo">
        <div class="header-title">Air Pollution Dashboard</div>
      </div>
      <div class="flex-container column">
          <div class="item one" @click="clickChart('1')" style="transform: translate(-22.4%,-33.5%) scale(0.33)">
            <city-posting></city-posting>
          </div>
          <div class="item two" @click="clickChart('2')" style="transform: translate(-22.4%,0.5%) scale(0.33)">
            <Map></Map>
          </div>
          <div class="item three" @click="clickChart('3')" style="transform: translate(-22.4%,34.5%) scale(0.33)">
            <Disease></Disease>
          </div>
          <div class="item four active" @click="clickChart('4')" style="transform: translate(43.7%, 0) scale(1)">
            <Theme></Theme>
          </div>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from './Footer.vue'
  import HeaderLogo from '@/assets/header.png'
  import Theme from './Theme.vue'
  import Disease from './Disease.vue'
  import Map from './Map.vue'
  import CityPosting from './CityPosting.vue'
  import CityLine from './line.vue'
  
export default {
  data() {
    return {
      HeaderLogo,
      items: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    _resize() {
      this.$root.charts.forEach((myChart) => {
        myChart.resize()
      })
    },
    init() {
      this.items = document.querySelectorAll('.flex-container .item')
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].dataset.order = i + 1;
      }
    },
    clickChart(clickIndex) {
      let activeItem = document.querySelector('.flex-container .active')
      let activeIndex = activeItem.dataset.order
      let clickItem = this.items[clickIndex - 1]
      if (activeIndex === clickIndex) {
        return
      }
      activeItem.classList.remove('active')
      clickItem.classList.add('active')
      this._setStyle(clickItem, activeItem)
    },
    _setStyle(el1, el2) {
      let transform1 = el1.style.transform
      let transform2 = el2.style.transform
      el1.style.transform = transform2
      el2.style.transform = transform1
    }
  },
  components: {
    Footer,
    Theme,
    Disease,
    Map,
    CityPosting,
    CityLine,
  
    
  }
}

</script>

<style lang="scss" scoped>

.dashboard-header{
  position: relative;
  height:80px;
  text-align: center;
  
  .header-title{
    line-height:60px;
    font-size:24px;
    z-index:2;
    position: absolute;
    top:0;
    left:40%;
    color:#fff;
  }

  img{
    width:100%;
    max-height:100%;
  }
  
}
.item{
    padding: 0px;
    margin: 0px;
    width: 68%;
    height: 100%;
    position:absolute;
    transform:scale(0.33);
    text-align: center;
    transition:all 0.8s;
    background:rgba(32, 32, 35, 0.5);
    overflow:auto;
}
    

    
.flex-container.column{
    position:relative;
    height: 600px;
    width: 100%;
    overflow: hidden;
    margin:  50px auto 50px auto;
    box-sizing: content-box;
}

.active{
    height:100%;
    width: 69%;
    margin-left: 10px;
    line-height: 300px;
}    
</style>
