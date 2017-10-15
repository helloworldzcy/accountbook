import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login_register from '@/components/login_register'
import PersonalCenter from '@/components/PersonalCenter'
import Account from '@/components/Account'
import submit_success from '@/components/submit_success'
import search_bills from '@/components/search_bills'
import search_result from '@/components/search_result'
import data_details from '@/components/data_details'
import data_display from '@/components/data_display'
import check_account from '@/components/check_account'
import change_success from '@/components/change_success'
import nav_bar from '@/components/nav_bar'
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
    	path:'/login_register',
    	component:login_register
    },

    {
    	path:'/PersonalCenter',
    	component:PersonalCenter
    },

    {
      path:'/Account',
      component:Account
    },
    {
      path:'/submit_success',
      component:submit_success
    },
    {
      path:'/search_bills',
      component:search_bills
    },
    {
      path:'/search_result',
      component:search_result
    },
    {
      path:'/data_details',
      component:data_details
    },
    {
      path:'/data_display',
      component:data_display
    },
    {
      path:'/check_account',
      component:check_account
    },
    {
      path:'/change_success',
      component:change_success
    },
    {
      path:'/nav_bar',
      component:nav_bar
    }
  ]
})
