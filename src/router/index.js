import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FarmersPage from '../views/FarmersPage.vue'
import BlogPage from '../views/BlogPage.vue'
import FaqPage from '../views/FaqPage.vue'
import ContactPage from '../views/ContactPage.vue'
import WishListPage from '../views/WishListPage.vue'
import CartPage from '../views/CartPage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/farmers',
    name: 'FarmersPage',
    component: FarmersPage
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: FaqPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
   {
    path: '/wishlist',
    name: 'WishListPage',
    component: WishListPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
