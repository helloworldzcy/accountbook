<template>
	<div class="data_details">
		<p>时间：<span>{{time}}</span></p>
		<p>使用人:<span>{{user}}</span></p>
		<p>类型:<span>{{kind}}</span></p>
		<p>地点：<span>{{place}}</span></p>
		<p>金额：<span>{{amount}}</span>元</p>
		<p>用途:<span>{{use}}</span></p>
		<p>备注：<span>{{details}}</span></p>
		<p>未清账</p>
	</div>	
</template>
<script type="text/javascript">
export default{
	name:'message',
	props:{
		time:String,
		user:String,
		kind:String,
		place:String,
		amount:Number,
		use:String,
		details:String
	}
}
	
</script>
<style type="text/css">
	
</style>