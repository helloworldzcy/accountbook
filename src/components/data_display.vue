<template>
	<div class="data_display_wrap">
	<nav_bar></nav_bar>
	<p style="color:#4E9A06;font-size: 25px;height:20px">账单详情</p>
	<p style="color:#4E9A06;font-size: 14px;height:15px">Billing Details</p>
	<div class="data_display">
		<p><span>时间</span><span>{{time}}</span></p>
		<p><span>使用人</span><span>{{user}}</span></p>
		<p><span>类型</span><span>{{kind}}</span></p>
		<p><span>地点</span><span>{{place}}</span></p>
		<p><span>金额</span><span>{{amount}}元</span></p>
		<p><span>用途</span><span>{{use}}</span></p>
		<p><span>备注</span><span>{{details}}</span></p>
		<p><span>已清账</span><span>否</span></p>		
	</div>
	</div>
</template>
<script type="text/javascript">
import nav_bar from '../components/nav_bar.vue'
export default{
	name:"data_display_wrap",
	components:{nav_bar},
	data(){
		return{
			time:'XXXX年XX月XX日',
			user:'某某',
			kind:'收入/支出',
			place:'公司/其他',
			amount:'XX',
			use:'采购/其他',
			details:'其他'
		}
	}
}
	
</script>
<style scoped>
.data_display{

	width:420px;
	margin:40px auto;
	box-sizing: border-box;
	padding:20px 10px;
	border-top: 1px solid #C0C0C0;
}
.data_display p{
	border-bottom: 1px solid #E0E0E0;
	padding-bottom: 15px;
}
.data_display p:after{
	content:"";
	display: table;
	clear: both;
	overflow:hidden;
}
.data_display p span:nth-child(1){
	float:left;
	margin-left:20px;

}	
.data_display p span:nth-child(2){
	float:right;
	color:#4E9A06;
	margin-right: 20px;
}	
	
</style>