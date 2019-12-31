<template>
  <div class="header">
    <div class='header-left'>
		<span class="iconfont">&#xe624;</span> <!--左箭头的16进制码-->
	</div>
    <div class='header-input'>
		<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题
		</div>
    <div class='header-right'>
		城市
		<span class="iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{
		name:'Header'
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .header{
	display: flex;
	 justify-content: space-between;
	 height: .86rem;
	 line-height: .86rem;
	 background: #00bcd4;
	 color: #fff;
	 width:100%; 
  }
  .header-left{
	  text-align: center;
	  width: .64rem;
	  font-weight: 700;
	  padding: 0 .1rem;
  }
   .header .header-input{
   	  flex: 1;
   	  border: 1px solid #red;
   	  height: .6rem;
   	  width: 100rem;
   	  line-height: .6rem;
   	  margin-top: .14rem;
   	  padding-left: .2rem;
   	  background: #fff;
   	  border-radius: .06rem;
   	  color: #eee;   	  
   }
  .header .header-right{
  	  min-width: 1.04rem;
  	  padding: 0 .1rem;
  	  text-align: center;
  	  color: #fff;
	  
  }
  .header-left .iconfont{
  	  font-size: .12rem;
  }
  .header-right .iconfont{
	  font-size: .12rem;
  }
</style>
