<!-- 周末去哪单项 -->
<template>
  <div class="d-item">
	<div class="item-img">
	  <img src="http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg" />
	</div>
	<div class="item-info">
		<!-- 溢出隐藏出现省略号 -->
	  <p class="item-info__title ellipsis">上海泡汤圣地</p>
	  <p class="item-info__cont ellipsis">上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉</p>
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
  .d-item{
	 background: #fff;
  }
  .d-item .item-img{
	  width: 100%;
	  overflow: hidden;
	  height: 0;
	  padding-bottom: 37.45%;
  }
  .d-item .item-img img{
	  width: 100%;
  }
  .item-info{
	  padding: .1rem;
  }
  .item-info .item-info__title{
	  padding-right: 1.4rem; /* 设置宽度，溢出隐藏需要 */
	  line-height: .48rem;
	  font-size: .28rem;
  }
  .item-info .item-info__cont{
	  padding-right: 1.4rem;  /* 设置宽度，溢出隐藏需要 */
	  color: #616161;
	  font-size: .24rem;
	  line-height: .42rem;
}
</style>
