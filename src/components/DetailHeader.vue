<template>
	<div class="detail-header">
		<div class="sub-nav">
			<div class='header-left'>
				<span class="iconfont">&#xe624;</span> 
			</div>
			<div class='header-title'>{{title}}</div>
			<div class='header-right' >{{right}}</div>
		</div>
		<div class="sub-head"></div>
	</div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		title:{
			type:String,
			default:"大标题"
		},
		right:{
			type:String,
			default:""
		}
	},
    components:{},

  }
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
	
  .sub-nav{
	   display: flex;
	   justify-content: space-between;
	   height: .86rem;
	   line-height: .86rem;
	   background: $bg-color;
	   color: #fff;
	   font-size: .30rem;
	   width:100%; 
	   position: fixed;
	   z-index: 9999;
	  .header-left{
		  text-align: center;
		  width: .64rem;
		  font-weight: 700;
		  padding: 0 .1rem;
		  .iconfont{
		  	  font-size: .12rem;
		  }
	  }
	   .header-center{
			
	   }
	  .header-right{
		  min-width: 1.04rem;
		  padding: 0 .1rem;
		  text-align: center;
		  color: #fff; 
		.iconfont{
			  font-size: .12rem;
		}
	  }
  }
  .sub-head{
	  height: .86rem;
  }

</style>
