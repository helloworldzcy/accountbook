<template>
<div class="wrap">
	<div class="login-wrap" v-show="showLogin">
	<p style="color: #4E9A06;font-size:22px;margin:20px 0">Sign in to Accounting System</p>	
	<div class="login">	
		<input type="post"placeholder="用户名" v-model="username" v-on:click="cls"><br>
		<p v-show="show_inform1" style="color:red;background-color:white;">{{inform1}}</p>
		<input type="post" placeholder="密码" v-model="password" v-on:click="cls"><br>
		<p v-show="show_inform2" style="color:red;background-color:white;">{{inform2}}</p>
		<button v-on:click="login">登录</button>
	</div>
	<p v-on:click="ToRegister" :class="{'active':isactive}">没有帐号？马上注册</p>	
	</div>
	<div class="register-wrap" v-show="showRegister">
	<p style="color: #4E9A06;font-size:22px;margin:20px 0">Sign up to Accounting System</p>
	<div class="register">
		<input type="post" placeholder="请输入用户名" v-model="username_new" v-on:click="cls"><br>
		<p v-show="show_inform1" style="color:red;background-color:white;">{{inform1}}</p>
		<input type="post" placeholder="请输入密码" v-model="password_new" v-on:click="cls"><br>
		<p v-show="show_inform2" style="color:red;background-color:white;">{{inform2}}</p>
		<button v-on:click="register">注册</button><br>
	</div>
	<p v-on:click="ToLogin" :class="{'active':isactive}">已有帐号？马上登录</p>
	</div>
</div>
</template>
<script>
export default{
  name:'wrap',
  data(){
    return{
    	showLogin:true,
    	showRegister:false,
    	show_inform1:false,
    	show_inform2:false,
    	username:'',
    	password:'',
    	username_new:'',
    	password_new:'',
    	isactive:true
    }
  },
  methods:{
  	ToRegister(){
  		this.showLogin=false;
  		this.showRegister=true; 	
  		this.show_inform1=false;
  		this.show_inform2=false;	 		
  	},
   	ToLogin(){
  		this.showLogin=true;
  		this.showRegister=false; 	
  		this.show_inform1=false;
  		this.show_inform2=false;		 		
  	},
  	login(){
  	if(this.username==""||this.password==""||this.username.length<2||this.username.length>20||this.password.length<6||this.password.length>20)
  	{	
  		if(this.username=="")
  		{
  			this.inform1="请输入用户名";
  			this.show_inform1=true;
  		}
  		if(this.password=="")
  		{
  			this.inform2="请输入密码";
  			this.show_inform2=true;
  		}
  		if((this.username.length<2&&this.username.length>0)||this.username.length>20)
  		{
   			this.inform1="用户名有误";
  			this.show_inform1=true; 			
  		}
  		if((this.password.length<6&&this.password>0)||this.password.length>20)
  		{
   			this.inform2="密码有误";
  			this.show_inform2=true; 			
  		}
  	}
  	else
  	{
  		this.$router.push('/Account');
  	}

  	},
   register(){
   	if(this.password_new==""||this.username_new==""||this.username_new.length<2||this.username_new.length>20||this.password_new.length<6||this.password_new.length>20){

   	   if(this.password_new==""&&this.username_new=="")
   	   {
   	   	   this.inform1="用户名不能为空";
   	   	   this.show_inform1=true;
   	   	   this.inform2="密码不能为空";
   	   	   this.show_inform2=true;
   	   }
   	   if(this.username_new=="")
   	   {
   	   	   this.inform1="用户名不能为空";
   	   	   this.show_inform1=true;
   	   }
   	   if(this.password_new=="")
   	   {

   	   	   this.inform2="密码不能为空";
   	   	   this.show_inform2=true;
   	   }

   	   if(this.username_new.length<2&&this.username_new.length>0||this.username_new.length>20)
   	   {
   	   	   this.inform1="用户名由2-20位字符组成";
   	   	   this.show_inform1=true;
   	   }
   	   if(this.password_new.length<6&&this.password_new.length>0||this.password_new.length>20)
   	   {
    	   this.inform2="密码由6-20位字符组成";
   	   	   this.show_inform2=true;  	   	
   	   }

   	   }

   	   else
   	   {
   	   	    alert('注册成功,即将跳转登录页面，请等待');
   	   	    this.showLogin=true;
   	   	    this.showRegister=false;
  		    this.show_inform1=false;
  		    this.show_inform2=false;  	   	    
   	   	    this.$router.push('/');
   	   }
  	},
  	cls(){
  		this.show_inform1=false;
  		this.show_inform2=false;
  	}

  }

}
	
</script>
<style scoped>
.wrap input,.wrap button{
	width:320px;
	height:44px;
	margin:10px;
  font-size:15px; 
  border:1px solid #C0C0C0;
  box-shadow:0 0 3px #ccc;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  background-color:white;
  color:#4E9A06;
}
.wrap button{
	background-color:#4E9A06;
	color:white;
	font-size:20px;
	
}
.login,.register{
	width:400px;
	border:1px solid #C0C0C0;
	margin:30px auto;
	box-sizing: border-box;
	padding:80px 0;
	border-radius:8px;
	background-color: white;

}
.active{
	color:#4E9A06;
	text-decoration: underline;
	font-size:17px;
	width:400px;
	height:60px;
	margin:30px auto;
	box-sizing: border-box;
	border:1px solid #E0E0E0;
	border-radius:8px;
	padding:15px 0px;
	cursor: pointer;
}
.active:hover{
  background-color: white;
}
</style>