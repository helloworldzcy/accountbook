<template>
	<div class="check_account_wrap">
    <nav_bar></nav_bar>		
	<div class="check_account">
	<input type="text" placeholder="搜索框" v-model="input" class="check_search">
	<p style="color:#4E9A06;font-size:25px;height:20px">未清账单</p>
	<p style="color:#4E9A06;font-size:15px">Unsettled bill</p>
	<data_details v-for="message in messageArr" :time="message.time" :user="message.user" :kind="message.kind" :place="message.place" :amount="message.amount" :use="message.use" :details="message.details"></data_details>
	</div>
	</div>
</template>
<script type="text/javascript">
import data_details from '../components/data_details.vue'
import nav_bar from '../components/nav_bar.vue'
export default{
	name:'check_account',
	components:{data_details,nav_bar},
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
<style>
.check_account{
	margin:50px auto;
}
.check_search{
	width:400px;
	height:30px;
}
.search_datas{
	margin:30px auto;
	width:450px;
	text-align: left;
	border-top:1px solid #C0C0C0;
	box-sizing: border-box;
	padding:20px 10px;
}
.search_datas p{
	border-bottom: 1px solid #E0E0E0;
	height:30px;
}
.search_datas p:after{
	content:"";
	display: table;
	clear: both;
	overflow:hidden;
}
.search_datas p span:nth-child(1){
	float:left;
	margin-left:20px;

}	
.search_datas p span:nth-child(2){
	float:right;
	color:#4E9A06;
	margin-right: 20px;
}	
</style>