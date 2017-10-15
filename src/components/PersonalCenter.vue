<template>
	<div class="personalcenter">
    <p>修改密码</p>
    <p><label>原密码</label><input type="password" v-model="old_password" v-on:click="conceal"></p>
    <p v-show="change_inform1">{{inform1}}</p>
    <p><label>新密码</label><input type="password" v-model="new_password" placeholder="密码为6-20位字符" v-on:click="conceal"></p>
    <p v-show="change_inform2">{{inform2}}</p>
    <p><label>确认密码</label><input type="password" v-model="new_password1" v-on:click="conceal"></p>
    <p v-show="change_inform3">{{inform3}}</p>
    <button v-on:click="submit">确认修改</button> 
 </div>

</template>
<script type="text/javascript">
export default{
  name:'PersonalCenter',
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
<style type="text/css">
	
</style>