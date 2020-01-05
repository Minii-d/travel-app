<template>
	<div class="reg">
		<DetailHeader title="注册"/>
		<div class="form">
			<InputCell label="手机号" placeholder="请输入手机号" class="inputCell"/>
			<InputCell label="图形码" placeholder="请输入图形码" class="inputCell"/>
			<InputCell label="验证码" placeholder="请输入验证码" class="inputCell"/>
		</div>
		<LoginBtn class="loginBtn" value="注册"/>
		<p class="protocal">注册即同意去哪儿&nbsp;<a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a>&nbsp;和&nbsp;<a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">隐私政策</a></p>
	</div>
</template>

<script>
	import DetailHeader from "@/components/DetailHeader.vue"
	import InputCell from "@/components/input-cell.vue"
	import LoginBtn from "@/components/login-btn.vue"
	
	export default {
		data(){return {}},
		components:{
			DetailHeader,InputCell,LoginBtn
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
	html,body{
	}
  .reg{
	  background: #f3f9fc;
	  height: 100%;
	  box-sizing: border-box;
	  padding-bottom: 100%; //背景颜色所占区域
	.form{	  
		border-top: .02rem solid #ccc;
		border-bottom: .02rem solid #ccc;
		background: #fff;
		margin: .2rem 0 .3rem;
		.inputCell{
			margin-left: .2rem;
			width: 100%;
			border-bottom: .02rem solid #ddd;
			&:last-child{
				border:0;	
			}
		}
	}
	.loginBtn{
		margin-bottom: .48rem;
	}
	.protocal{
		text-align: center;
		font-size: .12rem;
		color: #9e9e9e;
		a{
			color: #9e9e9e;
			text-decoration: underline;
		}
	}
  }
</style>
