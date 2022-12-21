import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TicketProcess from '../views/ticket-process.vue'
import Login from '../views/login.vue'
import contactUS from '../views/contact-us.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeC',
    component: HomeView,
  },

    {
      path: '/ticket',
      name: 'ticketC',
      component: TicketProcess,
    },
    {
      path: '/contactUS',
      name: 'contactUS',
      component: contactUS,
    },
    {
      path: '/login',
      name: 'loginC',
      component: Login,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
