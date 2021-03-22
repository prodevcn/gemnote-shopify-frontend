import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import Chartist from 'chartist'
import MaterialDashboard from './material-dashboard'

const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
})

Vue.config.productionTip = false
Vue.prototype.$Chartist = Chartist
Vue.use(VueRouter)
Vue.use(MaterialDashboard)

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
