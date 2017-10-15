<template>
	<div class="change_success_wrap">
		<nav_bar></nav_bar>
		<div class="change_success">
			<p style="color:#4E9A06;font-size: 25px;margin-top:50px">修改成功</p>
			<router-link to="/PersonalCenter"><button>返回上一页</button></router-link>
			<router-link to="/"><button>退出登录</button></router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
import nav_bar from '../components/nav_bar.vue'
export default{
	name:'change_success_wrap',
	components:{nav_bar},
	data(){
		return{

		}
	}
}
	
</script>
<style scoped>
button{
	width:150px;
	height:40px;
	color:#fff;
	background-color: #4E9A06;
	margin-right:20px;
	border-radius:8px;
	margin-top: 30px;
}
	
</style>