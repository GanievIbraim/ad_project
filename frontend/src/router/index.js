import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdListView from '../views/Ads/AdListView.vue'
import AdView from '../views/Ads/AdView.vue'
import NewAdView from '../views/Ads/NewAdView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistrationView from '../views/Auth/RegistrationView.vue'
import OrdersView from '../views/User/OrdersView.vue'


const routes = [{
    props: true,
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    props: true,
    path: "/ad/:id",
    name: "ad",
    component: AdView
  },
  {
    props: true,
    path: "/list",
    name: "list",
    component: AdListView
  },
  {
    props: true,
    path: "/new",
    name: "newAd",
    component: NewAdView
  },
  {
    props: true,
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    props: true,
    path: "/registration",
    name: "reg",
    component: RegistrationView
  },
  {
    props: true,
    path: "/orders",
    name: "orders",
    component: OrdersView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router