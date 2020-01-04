<template>
  <div class="detail-scenice">
    <div class="refer">
		<h3>入园参考{{title}}</h3>
		<div class="refer-info">
			<DetailCell/>
			<DetailCell/>
			<DetailCell/>
		</div>
	</div>
	<div class="more" @click="getMore">展开更多↓</div>
	
  </div>
</template>

<script>
	import DetailCell from "./components/detail-cell.vue"
	export default {
		data(){return {}},
		props:{
			title:{
				type: String,
				default: "标题1"
			}
		},
		components:{
			DetailCell
		},
		methods:{
			getMore(){
				let referInfo = document.querySelector(".refer-info");
				let more = document.querySelector(".more");
				referInfo.style.height= "auto";
				more.style.display = "none";				
			}
		}
	}
</script>

<style scoped lang="scss">
	$blue:#00bcd4;
  .detail-scenice{
	  background: #fff;
	  font-size: .24rem;
	  .refer{		 
		 border-bottom: .01rem solid #eee;		 
		 h3{
			position: relative;
			overflow: hidden;
			height: .9rem;
			line-height: .9rem;
			padding: 0 .34rem;
			font-weight: 700;
			color: #212121;
			border-bottom: .01rem solid #eee;
			&:before{
				content:"";
				display: inline-block;
				height: .28rem;
				width: .05rem;
				background: $blue;
				vertical-align: middle;
				margin: 0 .05rem;
			}
		 } 
		.refer-info{
			height: 1.44rem;
			overflow: hidden;
		}
	  }
	  .more{
		  line-height: .88rem;
		  text-align: center;
	  }
	  
  }
</style>
