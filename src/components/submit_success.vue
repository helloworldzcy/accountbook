<template>
	<div class="success">
		<nav_bar></nav_bar>
		<div class="success_choice">
			<p>Submitted successfully</p>
			<p>继续录入账单？</p>
	    <button v-on:click="choose">是，返回上一页面</button>
	    <button v-on:click="choose1">否，退出登录</button>
	    </div>
	</div>
	
</template>
<script type="text/javascript">
import nav_bar from '../components/nav_bar.vue'
export default{
	name:'success',
	components:{nav_bar},
	data(){
		return{

		}
	},
	methods:{
		choose(){
			this.$router.push('/Account');
		},
		choose1(){
			this.$router.push('/');
		}
	}

}
	
</script>
<style scoped>
.success_choice p:nth-child(1){
	color:black;
	font-size: 30px;
	margin:80px auto;
}
.success_choice p:nth-child(2){
	margin-top:60px;
	color:#4E9A06;
	font-size: 20px;
	margin-bottom: 20px;
}
button{
	width:200px;
	height:40px;
	background-color: white;
	border: 1px solid black;
	color:#4E9A06;
	margin-right:10px;
	margin-bottom: 80px;
	font-size: 15px;

}
</style>