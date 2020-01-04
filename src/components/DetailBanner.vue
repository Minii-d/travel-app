<template>		
	<div class="detail-banner">
		<div class="back">
			<span class="back-bg"></span>
			<span class="back-icon iconfont">&#xe624;</span>
		</div>
		<img src="//img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_600x330_2285872d.jpg">
		<p class="banner-cont">东方明珠（AAAAA景区）</p>
	</div>

</template>

<script>

  export default {

    data() {
      return {

      }
    },
   

  }
  
</script>

<style scoped lang="scss">

	.detail-banner{
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 55%;
	position: relative;
		.back{
			left: .1rem;
			top: .1rem;
			width: .72rem;
			height: .72rem;
			line-height: .72rem;
			position: absolute;
			.back-bg{
				display: block;
				width: .72rem;
				height: .72rem;
				background-color: #000;
				opacity: .5;
				border-radius: 50%;
			}
			.back-icon{
				position: absolute;
				left: 0;
				top: 0;
				display: block;
				width: .72rem;
				line-height: .72rem;
				text-align: center;
				color: #fff;
				font-weight: 700;
			}
		}
		img{
			width: 100%;
		}
		.banner-cont{
			position: absolute;
			right: .2rem;
			bottom: .36rem;
			left: .2rem;
			z-index: 1;
			color: #fff;
			font-size: .36rem;
		}
	}
</style>
