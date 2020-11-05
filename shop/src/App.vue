<template>
  <div id="app">
      <router-view/>
      <TabBar :tabs="tabs" v-on:toggle="toggle" />
  </div>
</template>


<script>
  import TabBar from 'components/tabbar/TabBar.vue';
  export default {
      name:'App',
      data(){
        return {
          tabs: [
              {
                  name:'首页',
                  img: require('assets/image/tabbar/index.svg'),
                  actImg: require('assets/image/tabbar/index_active.svg'),
                  index: '0',
                  path:'/index',
                  checked:true
              },
              {
                  name:'分类',
                  img: require('assets/image/tabbar/category.svg'),
                  actImg: require('assets/image/tabbar/category_active.svg'),
                  index: '1',
                  path:'/category',
                  checked:false
              },
              {
                  name:'购物车',
                  img: require('assets/image/tabbar/cart.svg'),
                  actImg: require('assets/image/tabbar/cart_active.svg'),
                  index: '2',
                  path:'/cart',
                  checked:false
              },

              {
                  name:'我的',
                  img: require('assets/image/tabbar/home.svg'),
                  actImg: require('assets/image/tabbar/home_active.svg'),
                  index: '3',
                  path:'/home',
                  checked:false
              },
          ]
        }
      },
      components:{
        TabBar
      },
      methods:{
        toggle(index){
            this.tabs.map(e =>{
              e.checked = e.index === index ? true:false
            });
        }
      },
      mounted:function(){
          console.log(this.$route);
          console.log(window.location.pathname);
          let pathname = window.location.pathname;
          if("/" === pathname){
              pathname = "/index"
          }
          this.tabs.map(e =>{
            e.checked = e.path === pathname ? true:false
          });
      }
  }
</script>


<style>
  @import url('assets/css/base.css');
</style>
