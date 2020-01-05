<template>
  <div class="user">
    <div class="user-head">
		<div class="user-head__icon" @click="goBack">
			<a class="back-icon iconfont">&#xe624;</a>
		</div>		
		<img class="bg-img" src="../../public/images/mybgnew-20161111.jpg">
		<div class="user-head__login">
			<router-link to="/Login">
				<img class="header-img" src="../../public/images/avatar.png">
				<span>登录/注册</span>
			</router-link>
		</div>
	</div>

	<div class="my-wallet ">
		<UserCell text="我的钱包" textIcon="&#xe7bb;" bgColor="#ff7043"/>
	</div>
	
	<div class="my-list">
		<UserCell text="我的订单" textIcon="&#xe7bb;" bgColor="#4fc3f7" foward="&gt;"/>
		<UserCell text="我的退款" textIcon="&#xe7bb;" bgColor="#ffa21f" foward="&gt;"/>
		<UserCell text="我的发票" textIcon="&#xe7bb;" bgColor="#ffa21f" foward="&gt;"/>
		<UserCell text="我的攻略" textIcon="&#xe7bb;" bgColor="#ffa21f" foward="&gt;"/>
	</div>

  </div>
</template>

<script>
	import UserCell from "../components/user-cell.vue" 
	import InputCell from "../components/input-cell.vue" 
	export default {
		data(){return {}},
		components:{
			UserCell,InputCell
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="scss">
  .user{
	  .user-head{
		  height: 3.2rem;
		  position: relative;
		  .bg-img{
			  width: 100%;
			  position: absolute;
			  bottom: 0;
		  }
		  .user-head__icon{
			  height: .44rem;
			  position: absolute;
			  z-index: 999;
			  .back-icon{
				  display: inline-block;
				  margin: .36rem;
				  font: 700 .4rem/1 "";
				  color: #fff;
			  }
		  }
		  .user-head__login{
			  position: absolute;
			  top:0;
			  bottom:0;
			  left: 0;
			  right: 0;
			  margin: auto;
			  height: 1.4rem;
			  width: 1.4rem;
			  background: rgba(255,255,255,0.5);
			  border-radius: 50%;
			  text-align: center;
			  padding-top: .05rem;
			  box-sizing: border-box;
			  // overflow: hidden;
			  .header-img{
				  width: 1.3rem;
				  height: 1.3rem;
				  margin-bottom: .12rem;
			  }
			  span{
				  color: #fff;
			  }
		  }
	  }
	  .my-wallet{
		  background: #fff;
		  margin-top: .2rem;
	  }
	  .my-list{
		  background: #fff;
		  margin-top: .2rem;

	  }
  }
</style>
