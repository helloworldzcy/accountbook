<template>
	<div class="data_details search_datas">
		<p><span>时间</span><span>{{time}}</span></p>
		<p><span>使用人</span><span>{{user}}</span></p>
		<p><span>类型</span><span>{{kind}}</span></p>
		<p><span>地点</span><span>{{place}}</span></p>
		<p><span>金额</span><span>{{amount}}元</span></p>
		<p><span>用途</span><span>{{use}}</span></p>
		<p><span>备注</span><span>{{details}}</span></p>
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
<style>
	
</style>