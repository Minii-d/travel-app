<!-- 猜你喜欢单项 -->
<template>
  <div class="d-cell">
    <div class="d-cell__img">
		<img src="https://imgs.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg">
	</div>
	<div class="d-cell__right">
		<h3 class="title">上海迪士尼乐园</h3>
		<div class="comment">
			<span calss="comment-star">
				<strong></strong>
				<span>&#xe7bb;&#xe7bb;&#xe7bb;&#xe7bb;&#xe7bb;</span>
			</span>
			<span class="comment-cont">283463条评论</span>
		</div>	
		<div class="price">
			<span class="price-acount">￥<em>399</em></span>起
			<span class="address">浦东新区</span>
		</div>
		<div class="message">全球最大的迪士尼城堡</div>
	</div>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.d-cell{
		background: #fff;
		display: flex;
		padding: .2rem 0;
		border-bottom: 0.02rem solid #eee;  /*渲染页面需要调整一下*/
	}
	.d-cell__img{
		margin-left: .24rem;
	}
	.d-cell__img img{
		width:2rem;
		height:2rem;
	}
	.d-cell__right{
		flex:1;
		margin-left: .2rem;
	}
	.d-cell__right .title{
		margin-top: .26rem;
		height: .44rem;
		font-size: .32rem;
		line-height: .44rem;
	}
	.d-cell__right .comment{
		margin-top: .14rem;
		height: .34rem;
	}
	.d-cell__right .comment .comment-cont{
		color: #616161;
		font-size: .24rem;
		line-height: .34rem;
	}
	.d-cell__right .price{
		position: relative;
		margin-top: .22rem;
		color: #616161;		
		font-size: .24rem;
		line-height: .4rem;
	}
	.d-cell__right .price .price-acount{
		color: #ff8300;
	}
	.d-cell__right .price em{
		font-size: .4rem;
	}
	.d-cell__right .price .address{
		position: absolute;
		right: .24rem;
		bottom: 0;
	}
	.d-cell__right .message{
		/* display: -webkit-box; */
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		margin-top: .48rem;
		margin-right: .24rem;
		background: #fff9f9;
		padding: .04rem .1rem;
		color: #f55;
		font-size: .24rem;
		line-height: .34rem;
	}
	
	
</style>
