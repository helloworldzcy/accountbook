<template>
<div class="Register">
<div class="wrap">
<p>Sign up</p>
<form v-form name="myform" @submit.prevent="onSubmit" role="form">
   <div class="form_display">
        <input class="form-control form_submit" v-model="model.name" v-form-ctrl required name="name" placeholder="Your Username" maxlength="20" minlength="6" />
                        
  </div>
  <div class="form_display">
  <input class="input_data form_submit" v-model="model.password" v-form-ctrl name="password" type="password" required placeholder="Your Password" maxlength="20" minlength="6"/>
                        
  </div>

  <button class="login_btn" type="submit">Sign up</button>
</form>
</div>
<div class="system_name decoration">{{name}}</div>
<router-link to="/Login"><div class="register decoration">
  <span>Sign in</span>
</div></router-link>
<div class="decoration decoration1"></div>
<div class="decoration decoration2"></div>
<div class="decoration decoration3"></div>
<div class="decoration decoration4"></div>
</div>
</template>

<script type="text/javascript">

export default{
  name:'login',
  data(){
    return{
        myform: {},
        model: {},
        name:'Financial Accounting System'
    }
  }

}
</script>
<style type="text/css">
.Register{
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

}
a{
  color:white;
}

.wrap p:nth-child(1){
  width:100px;
  height:100px;
  background-color: white;
  box-sizing: border-box;
  color:black;
  padding:35px 20px;
  margin-top:-2px;
  
}
.wrap p:nth-child(2){
  position: absolute;
  top:0;
  right:0;
  padding:5px;
}
.decoration{
  position: absolute;
}
.system_name{
  top:16%;
  left:50%;
  height:60px;
  box-sizing: border-box;
  padding:20px;
  border-left: 1px solid #ffffff;
  border-right:1px solid #ffffff;
  border-top:1px solid #ffffff;
  transform: translate(-50%,-50%);
  min-width:300px;
}
.register{
  top:0;
  right:0;
  width:200px;
  height:60px;
  box-sizing: border-box;
  padding:20px;
  border:1px solid white;
  color:white;
}
.register:hover{
  background-color:white;
  color: black;
}
.form_submit,button{
  width:250px;
  height:40px;
  margin:10px;
  font-size:18px;
  text-align: center;

}
button{
  background-color:black;
  border:1px solid #ffffff;
  color:white;

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