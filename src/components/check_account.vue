<template>
	<div class="check_account">
	<input type="text" placeholder="搜索框" v-model="input">
	<data_details v-for="message in messageArr" :time="message.time" :user="message.user" :kind="message.kind" :place="message.place" :amount="message.amount" :use="message.use" :details="message.details"></data_details>
	</div>
</template>
<script type="text/javascript">
import data_details from '../components/data_details.vue'
export default{
	name:'check_account',
	components:{data_details},
	data(){
		return{
			messageArr:[
			{time:"2017年02月24日",user:"张三",kind:"支出",place:"1号分店",amount:"24000",use:"购买一批货物",details:"无"},
			{time:"2017年05月06日",user:"李四",kind:"收入",place:"3号分店",amount:"40000",use:"新品盈利",details:"无"},
			{time:"2017年06月08日",user:"老王",kind:"支出",place:"2号分店",amount:"3000",use:"店面装修",details:"无"}
			]
		}
	}

}
	
</script>
<style type="text/css">
</style>