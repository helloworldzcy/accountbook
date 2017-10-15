<template>
<div class="personalcenter_wrap">
  <nav_bar></nav_bar>
    <p style="font-size:25px;color:#4E9A06;height:20px;margin-top:50px">修改密码</p>
    <p style="font-size:15px;color:#4E9A06;margin-bottom:30px">Change Password</p>
	<div class="personalcenter">
    <p><span>原密码</span><span><input type="password" v-model="old_password" v-on:click="conceal"></span></p>
    <p v-show="change_inform1" class="inform_change">{{inform1}}</p>
    <p><span>新密码</span><span><input type="password" v-model="new_password" placeholder="密码为6-20位字符" v-on:click="conceal"></span></p>
    <p v-show="change_inform2" class="inform_change">{{inform2}}</p>
    <p><span>确认密码</span><span><input type="password" v-model="new_password1" v-on:click="conceal"></span></p>
    <p v-show="change_inform3" class="inform_change">{{inform3}}</p>
    <button v-on:click="submit">确认修改</button> 
 </div>
</div>
</template>
<script type="text/javascript">
import nav_bar from '../components/nav_bar.vue'
export default{
  name:'PersonalCenter',
  components:{nav_bar},
  data(){
    return{
      old_password:'',
      new_password:'',
      new_password1:'',
      change_inform1:false,
      change_inform2:false,
      change_inform3:false
    }
  },
  methods:{
    submit(){
      this.change_inform1=true;
      this.change_inform2=true;
      this.change_inform3=true;
      this.inform1="";
      this.inform2="";
      this.inform3="";  
      if(this.old_password.length<6||this.old_password.length>20||this.old_password==""||this.new_password==""||this.new_password1==""||this.new_password!=this.new_password1||this.new_password.length<6||this.new_password.length>20)
      {
        if(this.old_password.length<6||this.old_password.length>20)
        {
          this.inform1="原密码错误！"
        }
        if(this.old_password==""){
          this.inform1="请输入原密码！"
        }
        if(this.new_password=="")
        {
          this.inform2="新密码不能为空"
        }
        if(this.new_password.length<6&&this.new_password.length>0||this.new_password.length>20){
          this.inform2="密码为6-20位字符"
        }
        if(this.new_password1==""&&this.new_password.length>=6){
          this.inform3="请再次确认密码！"
        }
        if(this.new_password!=this.new_password1&&this.new_password1!="")
        {
          this.inform3="两次密码不一致，请重新输入！"
        }
      }
      else
      {
        this.$router.push('/change_success');
      }
    },
    conceal(){
      this.change_inform1=false;
      this.change_inform2=false;
      this.change_inform3=false;      
    }
  }
}
	
</script>
<style scoped>
*{
  color:#555753;
}
input{
  font-size: 15px;
  width:230px;
  height:35px;
  border:1px solid #C0C0C0;
  margin-left:20px;
  display: inline;
}
button{
  margin-top: 20px;
  margin-bottom: 80px;
  width:320px;
  height:45px;
  background-color: #4E9A06;
  color:white;
  font-size: 17px;
}
.personalcenter{
  width:360px;
  margin:0 auto;
}
.personalcenter p{
  height:25px;
  margin-top:30px;
}	
.personalcenter p:after{
  content:"";
  display: table;
  clear: both;
  overflow:hidden;
}
.personalcenter p span:nth-child(1){
  margin-top:10px;
  float:left;
  margin-left:20px;

} 
.personalcenter p span:nth-child(2){
  float:right;
  color:#4E9A06;
  margin-right: 20px;
} 
.inform_change{
  height:20px;
  box-sizing: border-box;
  color:red;
  margin:0 auto;
}
</style>