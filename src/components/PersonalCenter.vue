<template>
	<div class="personalcenter">
		<span>Financial Accounting System</span>
		<div class="wrap">
			<p>Change Password</p>
			<form onSubmit="return check();">
				<p><input type="post" name="password" class="password1" placeholder="Enter the original password" v-model="input_old"></p>
				<p><input type="post" name="password" placeholder="Enter the new password" v-model="input_new"></p>
				<button type="submit">Submit</button>

			</form>
		</div>
		<div class="decoration decoration1"></div>
		<div class="decoration decoration2"></div>
		<div class="decoration decoration3"></div>
		<div class="decoration decoration4"></div>
    </div>
</div>
</template>
<script type="text/javascript">
export default{
  name:'PersonalCenter',
  data(){
    return{

    }
  }
}
	
</script>
<style type="text/css">
.personalcenter{
  position: absolute;
  left:0;
  top:0;
  right: 0;
  bottom: 0;
  background: black;
  color:white;
  min-width: 400px;
}
.wrap{
  position: absolute;
  width:50%;
  height:340px;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  border:1px solid #FFFFFF;
  min-width:400px;
  text-align:center;
  box-sizing: border-box;
  padding:30px;

}
.personalcenter span{
	width:100%;
	display: block;
	position:absolute;
   left:50%;
   top:15%;
   transform: translate(-50%,-50%);
	font-size:25px;
}
input,button{
	 width:250px;
	 height:35px;
	 font-size: 16px;
	 margin:5px;
}
.decoration{
	position:absolute;
}
.decoration1{
  width:50px;
  height:50px;
  border:1px solid #ffffff;
  left:50px;
  top:50px;
}
.decoration2{
  width:60px;
  height:60px;
  border:1px solid #ffffff;
  right:50px;
  bottom:50px;
}
.decoration3{
  width:70px;
  height:70px;
  border:1px solid #ffffff;
  left:150px;
  bottom:100px;
}
.decoration4{
  width:50px;
  height:50px;
  border:1px solid #ffffff;
  right:150px;
  bottom:30px;
}
.decoration1:hover,.decoration2:hover,.decoration3:hover,.decoration4:hover{
  background-color: white;
  border:1px solid black;
}

@media(max-width:0px){
.decoration1,.decoration2,.decoration3,.decoration4{
    display:none;
  }
}			
	
</style>