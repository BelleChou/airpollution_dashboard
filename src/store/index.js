import Vue from 'vue'
import Vuex from 'vuex'
import Theme from './theme.js'
import Disease from './disease.js'
import City from './city.js'
import Line from './line.js'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules:{
    Theme,
    Disease,
    City,
    Line
  }
})
