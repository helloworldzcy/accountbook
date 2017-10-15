<template>														
	<div class="account">
		<nav_bar></nav_bar>
		<p style="font-size:30px;color:#4E9A06">记录账单</p>
		<p style="font-size:15px;color:#4E9A06;margin:5px auto">Record the bill</p>
		<div class="account_detail">
			<form>
			<p><label>账单时间</label><input type="text" placeholder="格式为2017-01-19" v-model="account_time" v-on:click="clean"></p>
			<p><label>地点</label><input type="text" v-model="account_place" v-on:click="clean"></p>
			<p><label>类型</label>
			<select v-on:click="clean">
				<option value="in">收入</option>
				<option value="out">支出</option>
			</select>
			</p>
			<p><label>使用人</label><input type="text" v-model="account_user" v-on:click="clean"></p>
			<p><label>金额</label><input type="text" placeholder="填写金额数字即可" v-model="account_amount"></p>
			<p><label>用途</label><input type="text" placeholder="如采购等" v-model="account_use" v-on:click="clean"></p>
			<p><label>已清账单</label>
			<select>
			<option value="unclean">否</option>
			</select>
			</p>
			<p><label>备注</label><textarea v-on:click="clean"></textarea></p>
			<p v-show="error_inform" v-html="errors" style="color:red;text-align:center;margin:-20px auto">{{errors}}</p>
			<p><button v-on:click="submit_check">提交账单</button></p>
			</form>

		</div>

	</div>
	
</template>
<script type="text/javascript">
import nav_bar from '../components/nav_bar.vue'
export default{
	name:'account',
	components:{nav_bar},
	data(){
		return{
			error_inform:false,
			account_amount:'',
			account_time:'',
			account_place:'',
			account_use:'',
			account_user:''
		}
	},
	methods:{
		submit_check(){
			this.errors="";
			var date=/^\d{4}\-\d{2}\-\d{2}/;
			var money=/^\d{0,10000000000}\d$/;
			if(this.account_amount==""||this.account_place==""||this.account_time==""||this.account_use==""||this.account_user==""||date.test(this.account_time)==false||money.test(this.account_amount)==false){
				this.error_inform=true;
				if(date.test(this.account_time)==false&&!this.account_time==""){
					this.errors+="<br>日期格式有误"
				}
				if(money.test(this.account_amount)==false&&!this.account_amount==""){
					this.errors+="<br>金额格式有误"
				}
				if(this.account_amount==""||this.account_place==""||this.account_time==""||this.account_use==""||this.account_user==""){
					this.errors+="<br>请将以上所有信息填写完整"
				}
			}
			else
			{
				 this.$router.push('/submit_success');
			}
		},
		clean(){
			this.errors="";
		}
	}
}
</script>
<style scoped>
*{
	margin:0;
	padding:0;
    color:#555753;
}
.account_detail{
	width:500px;
	margin:30px auto;
	box-sizing: border-box;
	padding-bottom:15px;
	border-top:1px solid #4E9A06;
	border-bottom: 1px solid #4E9A06;
}
.account_detail p{
	margin:10px;
}
.account_detail form{
	width:400px;
	margin:30px auto;
	text-align: right;
	box-sizing:border-box;
	padding-right:30px;
}
input,select,textarea{
	font-size: 15px;
	width:230px;
	height:35px;
	border:1px solid #C0C0C0;
	margin-left:20px;
}
button{
	width:320px;
	height:45px;
	background-color: #4E9A06;
	color:white;
	font-size: 17px;
	margin-top:20px;
}
select{
	background-color: white;
}
</style>