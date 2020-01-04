<template>
  <div class="prev-cell">
    <div class="prev-cell__cont">
		<h5>【即买即用】东方明珠看上海·超值票成人票</h5>
		<p><img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">21:00前购买随用</p>
		<ul>
			<li>自营</li>
			<li>无需换票</li>
			<li>不可退</li>
		</ul>
	</div>
	<DdBtn class="dd-btn"/>
  </div>
</template>

<script>
	import DdBtn from "./dd-btn.vue"
	export default {
		data(){return {}},
		components:{
			DdBtn
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss"> 
  .prev-cell{
	  position: relative;
	  .prev-cell__cont{
		  h5{
			  font-size: .28rem;
			  line-height: .52rem;
		  }
		  p{
			  height: .32rem;
			  color: #616161;
			  font-size: .2rem;
			  line-height: .32rem;
			  white-space: nowrap;
			  img{
				  width: .2rem;
				  max-height: .32rem;
				  margin-right: .04rem;
				  vertical-align: top;
			  }
		  }
		  ul{
			 display: flex;
			 li{
				 display: inline-block;
				 margin-top: .08rem;
				 padding: 0 .04rem;
				 height: .32rem;
				 color: #00afc7;
				 font-size: .2rem;
				 line-height: .32rem;
				 white-space: nowrap;
			 }
		  }
	  }
	  .dd-btn{
		  position: absolute;
		  top: 25%;
		  right: .1rem;
	  }
  }
</style>
