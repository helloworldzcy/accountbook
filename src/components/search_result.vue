<template>
	
    <div class="search_datas">
    	<p><span>使用人:</span><span>{{billuser}}</span></p>
        <p><span>时间:</span><span>{{billyear}}-{{billmonth}}-{{billday}}</span></p>
        <p><span>类型：</span><span>{{billkind}}</span></p>
        <router-link to="/data_display"><button>查看详情</button></router-link>
    </div>
</template>
<script type="text/javascript">
export default{
	name:"datas",
	props:{
		billuser:String,
		billyear:Number,
		billmonth:Number,
		billday:Number,
		billkind:String
	}
}
	
</script>
<style scoped>
.search_datas{
	margin:30px auto;
	width:450px;
	text-align: left;
	border-top:1px solid #C0C0C0;
	box-sizing: border-box;
	padding:20px 10px;
}
.search_datas p{
	border-bottom: 1px solid #E0E0E0;
	padding-bottom:15px;
	height:20px;
}
.search_datas p:after{
	content:"";
	display: table;
	clear: both;
	overflow:hidden;
}
.search_datas p span:nth-child(1){
	float:left;
	margin-left:20px;

}	
.search_datas p span:nth-child(2){
	float:right;
	color:#4E9A06;
	margin-right: 20px;
}	
button{
	text-align: center;
	margin-left:110px;
	width:200px;
	height:35px;
	color:white;
	background-color:#4E9A06;
	border-radius:8px;
}
</style>