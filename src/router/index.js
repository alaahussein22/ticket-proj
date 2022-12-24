import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TicketProcess from '../views/ticket-process.vue'
import Login from '../views/login.vue'
import contactUS from '../views/contact-us.vue'
import Register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'HomeC',
    component: HomeView,
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
  {
    path: '/register',
    name: 'registerC',
    component: Register,
  },
  {
    path: '/ticket',
    name: 'ticketC',
    component: TicketProcess,
    props: true,

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
