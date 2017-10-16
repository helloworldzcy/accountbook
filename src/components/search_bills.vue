<template>
	<div class="search_bills">
		<nav_bar></nav_bar>
		<div class="search_bills_details">
			<p>账单查询</p>
			<p>Bill query</p>
			<p :class="{'active':isactive}">
				<form>	
				<label>时间：</label>
				<select v-model="select" v-on:click="unshow">
					<option value="">请选择</option>
					<option v-for="year in years" v-bind:value="year.value">{{year.value}}</option>
				</select>
				<span>年</span>
				<select v-model="select1" v-on:click="unshow">
					<option value="">请选择</option>
					<option v-for="month in months" v-bind:value="month.value">{{month.value}}</option>
				</select>
				<span>月</span>
				<select v-model="select2" v-on:click="unshow">
					<option value="">请选择</option>
					<option v-for="day in days
					" v-bind:value="day.value">{{day.value}}</option>
				</select>
				<span>日</span>

			</p>
			<p :class="{'active':isactive}">
				<label>使用人：</label>
				<input type="text" v-model="user" v-on:click="unshow">
			</p>

			<p>
				<button v-on:click="submit">查询</button>
			</p>
		 </form>		
		</div>
		<div>
		<div class="result">
			<search_result v-for="datas in datasArr" :billuser="user" :billyear="select" :billmonth="select1" :billday="select2" :billkind="datas.billkind" v-show="bills_display"></search_result>
			<p v-show="searchinforms" style="color:red;font-size:18px">{{informs}}</p>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import search_result from '../components/search_result.vue'
import nav_bar from '../components/nav_bar.vue'
export default{
	name:'search_bills',
    components:{nav_bar,search_result},

	data(){
		return{
			select:'',
			select1:'',
			select2:'',
			user:'',
			isactive:true,
			bills_display:false,
			searchinforms:false,
			datasArr:[
			{billkind:"收入"},
			{billkind:"支出"},
			{billkind:"收入"}
			]
		}

	},
	computed:{
		years:function(){
			let list=[];
			for(let k=1990;k<=2017;k++){
				let obj={
					value:k,
					index:k,
				};
				list.push(obj)
			}
			return list			
		},
		months:function(){
			let list=[];
			for(let k=1;k<=12;k++){
				let obj={
					value:k,
					index:k,
				};
				list.push(obj)
			}
			return list
		},

		daylist:function(){
			let currentMonthLength=new Date(this.select,this.select1,0).getDate();
			let daylist=Array.from({length:currentMonthLength},(value,index)=>{
				return index
			});
			return daylist
		},//?
		days:function(){
			let list=[];
			for(let k=1;k<=this.daylist.length;k++){
				let obj={
					value:k,
					index:k,
				};
				list.push(obj)
			}
			return list
		}
	},
	methods:{
		submit(){
			if(this.select==""||this.select1==""||this.select2==""||this.user==""){
				this.searchinforms=true;
				this.informs="请将以上信息填写完整";
			}
			else if(this.select<=2000){
                this.searchinforms=true;
				this.informs="查询无果";				
			}
			else{
				this.bills_display=true;
			}
		},
		unshow(){
			this.bills_display=false;
			this.searchinforms=false;
		}
	}

}
</script>
<style scoped>
*{
	margin: 0;
	bottom:0;
	color:#555753;
}
select{
	width:100px;
	height:30px;
	background-color: white;
	box-shadow: 0 0 5px #C0C0C0;
	border: 1px solid #C0C0C0;
}
input{
	width:360px;
	height:30px;
	box-shadow: 0 0 5px #C0C0C0;
	border: 1px solid #C0C0C0;
	margin-left:-10px;
}
button{
	width:420px;
	height:40px;
	background-color: #4E9A06;
	color: white;
	font-size: 16px;
	border-radius: 8px;
}
.search_bills_details p:nth-child(1){
	color:#4E9A06;
	font-size: 25px;
	margin-top:15px;
}
.search_bills_details p:nth-child(2){
	color:#4E9A06;
	font-size: 15px;
	box-sizing: border-box;
	padding-bottom: 40px;
	border-bottom:1px solid #E0E0E0;
	width:450px;
	margin:10px auto;
}
.active{
	margin:25px;
}
.result{
	margin:100px auto;
}
	
</style>