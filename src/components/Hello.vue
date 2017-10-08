<template>
<div class="interface">
  <div class="wrap">
  <p>{{name}}</p>
  <div class="choice">
    <router-link to="/login"><span>{{si}}</span></router-link>
   <router-link to="/register"><span>{{su}}</span></router-link>
  </div>
    <div class="decoration decoration1"></div>
  <div class="decoration decoration2"></div>
  <div class="decoration decoration3"></div>
  <div class="decoration decoration4"></div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name:'Financial Accounting System',
      si: 'Sign In',
      su:'Sign up'      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interface{
    overflow-x: hidden;
  position: absolute;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  background-color: black;
}
@media (max-width:500px){
.wrap{
  width:90%;
}
}
@media (min-width:500px){
.wrap{
  width:400px;
}
}
.wrap{

  position:absolute;
  height:300px;
  border:1px solid #E0E0E0;
  left:50%;
  top:200px;
  transform:translateX(-50%);
}
.decoration{
  position:absolute;
  width:300px;
  height:200px;
}
.decoration1{
  left:-100px;
  transform:translateX(-50%);
  top:-100px;
  border-left:1px solid #ffffff;
  border-right:1px solid #ffffff;
  border-top:1px solid #ffffff;
}
.decoration2{
 right:-200px;
  top:-150px;
  border-left:1px solid #ffffff;
  border-right:1px solid #ffffff;
  border-bottom:1px solid #ffffff;
}
.decoration3{
  width:250px;
  left:-200px;
  bottom:-150px;
  border-right:1px solid #ffffff;
  border-left:1px solid #ffffff;
  border-top:1px solid #ffffff;
}
.decoration4{
  width:150px;
  height:150px;
  border:1px solid #ffffff;
  right:-120px;
  bottom:-230px;

  transform:translateY(-50%);
}
p{
  width:100%;
  color:#FFFFFF;
  margin-top: 100px;
  font-size:20px;
}
.choice{
   width:100%;
   height: 300px;
   background-color:black;
}
.choice span{
  display: inline-block;
  width:120px;
  height:50px;
  box-sizing: border-box;
  padding:15px;
  border:1px solid #ffffff;
  text-align: center;
  color: white;
  margin-top:30px;
}
.choice span:hover{
  background-color:white;
  color:black;
}
</style>
