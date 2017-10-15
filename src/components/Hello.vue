<template>
<div class="interface">
<div class="system_name">
<p>Financial Accounting system</p>
</div>
<img :src="logo">
<login_register></login_register>
</div>  
</template>

<script>
import login_register from '../components/login_register.vue'
import logo from '@/assets/1.jpg'
export default {
  name: 'hello',
  components:{login_register},
  data () {
    return {
      logo:logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman';
}
img{
  width:80px;
  height:80px;
  border-radius: 50%;
  border:1px solid #C0C0C0;
  margin-bottom: 10px;
}
.system_name{
  width:80%;
  height:50px;
  border-bottom:1px solid #DDC;
  padding-top: 5px;
  box-sizing: border-box;
  font-size:25px;
  color:#4E9A06;
  margin:30px auto;

}

</style>