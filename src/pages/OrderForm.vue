<template>
  <div class="order-form">
    <DetailHeader title="订单填写" right="登录"/>
	<PrevCell class="prev-cell" per="/张" :objList="objList" :type="'list'"/>
	<div class="ticketNum">		
		<label class="label">购买数量</label>
		<span class="mess">最多购买5张</span>
		<div class="changeNum">
			<input type="button" class="reduce" value="-">
			<input type="number" class="num" min="1" max="5" value="1" >
			<input type="button" class="add" value="+">
		</div>
	</div>
	
  </div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	import PrevCell from "../components/prev-cell.vue"
	export default {
		name: "order-form",
		data(){return {
			objList:{}
		}},
		components:{
			DetailHeader,PrevCell
		},
		mounted(){
			this.objList = JSON.parse(localStorage.getItem("objList"))
			console.log(this.objList)
		},
		methods:{}
	}
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
	.order-form{		
		.prev-cell{
			background: #fff;
			padding: .16rem;
		}
		.ticketNum{
			display: flex;
			justify-content: space-between;
			background: #fff;
			margin-top: 0.2rem;
			padding: .3rem .2rem;
			font-size: .28rem;
			
			.label{
				line-height: .54rem;
			}
			.mess{
				line-height: .46rem;
				font-size: .2rem;
				padding-right: 3rem;
				color: #aaa;
			}
			.changeNum{
				border: .04rem solid #eee;
				padding: .02rem;
				input{
					font-weight: 700;
					width: .48rem;
					height: .48rem;
					text-align: center;
					color: #fff;
				}
				.reduce{
					
				}
				.num{
					width: .6rem;
					color: #666;
				}
				.add{
					background-color: $bg-color;
				}
			}
		}
	}
</style>
