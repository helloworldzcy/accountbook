import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import VeeValidate from 'vee-validate';
Vue.use(Router)
Vue.use(VeeValidate)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/Login',
    	component:Login
    },
    {
    	path:'/Register',
    	component:Register
    }
  ]
})
