import Vue from 'vue'
import VueRouter from 'vue-router'


const Cart  = () => import('views/cart/Cart.vue');
const Category  = () => import('views/category/Category.vue');
const Index  = () => import('views/index/Index.vue');
const Home  = () => import('views/home/Home.vue');


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/index'
  },
  {
    path:"/index",
    name:'index',
    component:Index
  },
  {
    path:"/home",
    name:'home',
    component:Home
  },
  {
    path:"/cart",
    name:'cart',
    component:Cart
  },
  {
    path:"/category",
    name:'category',
    component:Category
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
