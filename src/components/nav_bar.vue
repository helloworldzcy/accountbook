<template>
	<div class="nav_bar_wrap">
		<ul :class="{'active':isactive}">
			<li style="color:green;font-size:25px">Financial accounting system</li>
			<li>
				<span v-on:click="show" style="color:green">个人中心</span>
				<div class="nav_bar_choice" v-show="unshow">
					<router-link to="/Account"><p>记录账单</p></router-link>		
					<router-link to="/Search_bills"><p>查询账单</p></router-link>	
					<router-link to="/check_account"><p>审查账单</p></router-link>				
					<router-link to="/PersonalCenter"><p>修改密码</p></router-link>
					<router-link to="/"><p>退出登录</p></router-link>
				</div>
			</li>
		</ul>
		<img :src="logo">
	</div>
</template>
<script type="text/javascript">
import logo from '@/assets/1.jpg'
export default{
	name:"nav_bar_wrap",
	data(){
		return{
			logo:logo,
			isactive:true,
			unshow:false
	}
   },
   methods:{
   	show(){
   		if(this.unshow==false)
   		this.unshow=true;
   	    else{
   	    	this.unshow=false;
   	    }
   	}
   }
}
</script>

<style scoped>
*{
	margin:0;
	padding:0;
}
ul{
	list-style: none;
}
.active{
	width:80%;
	display: -webkit-flex;
	-webkit-flex-direction:row;
	list-style: none;
	margin:0 auto;
	height:50px;
	border-bottom:1px solid #E0E0E0;
	box-sizing: border-box;
	padding:10px;
}
@media (max-width: 600px){
	.active{
		width: 100%;
	}
}
.active li:nth-child(1){
	margin-right:auto;
}
.nav_bar_choice{
	margin:5px;
	height:200px;
	width:80px;
	border:1px solid #C0C0C0;
	background-color: white;
}
.nav_bar_choice p{
	font-size: 15px;
	color:#2E3436;
	margin:15px 0;
	background-color: white;
}
.nav_bar_choice p:hover{
	color:#4E9A06;
}
img{
  width:80px;
  height:80px;
  border-radius: 50%;
  border:1px solid #C0C0C0;
  margin: 10px 0;
}
</style>