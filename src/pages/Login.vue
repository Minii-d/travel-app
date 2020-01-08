<template>
	<div class="login">
		<DetailHeader title="登录" right="注册"/>
		<div class="login-tab">
			<div class="login-tab-box">
				<a class="active" @click="mobileLog" >短信验证登录</a>
				<a @click="normalLog">账号登录</a>
			</div>
		</div>
		<div class="form">
			<div class="mobile" v-if="this.$root.bLogin" >
				<InputCell label="手机号" placeholder="请输入手机号码" class="inputCell" v-model="mobile"/>
				<InputCell label="验证码" placeholder="请输入验证码" class="inputCell"/>	
			</div>
			<div class="normal" v-else>
				<InputCell label="账号" placeholder="手机号/邮箱/用户名" class="inputCell" v-model="username"/>
				<InputCell label="密码" placeholder="请输入密码" class="inputCell" v-model="password"/>		
			</div>
		</div>
		<LoginBtn class="loginBtn" value="登录" @click.native='login'/>
		
		<div  class="find-back" v-if="!this.$root.bLogin"><a href="//pay.qunar.com/mobile/h5/personalcenter/sensitive/forgotpwd.htm?ret=https://pay.qunar.com/mobile/h5/personalcenter/myaccount/index.htm?hybridid=mob_uc">找回密码</a></div>
		
		<p class="protocal">注册即同意去哪儿&nbsp;<a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a>&nbsp;和&nbsp;<a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">隐私政策</a></p>
	</div>
</template>

<script>
	import DetailHeader from "@/components/DetailHeader.vue"
	import InputCell from "@/components/input-cell.vue"
	import LoginBtn from "@/components/login-btn.vue"
	
	let top=0;//存储滚动位置
	export default {
		data(){return {
			username: '',
			password: '',
			mobile:'',
			mess:''
		}},
		components:{
			DetailHeader,InputCell,LoginBtn
		},
		mounted() {
			document.documentElement.scrollTop=top;
		},
		destroyed(){
		  top=document.documentElement.scrollTop;  
		  // console.log('destroyed',top);
		},
		// main.js将Login绑定到$root上
		methods:{
			mobileLog(){
				this.$root.bLogin=true;				
			},
			normalLog(){
				this.$root.bLogin=false;
			},
			
			login() {
			  let params = new URLSearchParams();
			  params.append('username', this.username)
			  params.append('password', this.password)
			  this.$axios({
			    url: '/api/login',
			    method: 'post',
			    data: params
			  }).then(
			    res => {
			      if(res.data.err==0){
					  console.log(res.data)
			        //种token,跳转user
			        window.localStorage.setItem('token',res.data.token);
			        this.$router.push('/user')
			      }else{
			        this.mess=res.data.msg
			      }
			    }
			  )			  
			}
		},

	}
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
  .login{
	background: #f3f9fc;
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 100%; //背景颜色所占区域
	.login-tab{
		height: .9rem;
		background: $bg-color;
		box-sizing: border-box;
		padding: .1rem .2rem;
		.login-tab-box{
			display: flex;
			justify-content: center;
			// box-sizing: border-box;
			// height: .64rem;
			border: .02rem solid #fff;
			border-radius: .03rem;
			overflow: hidden;
			a{
				line-height: .68rem;
				width: 50%;
				font-size: .3rem;
				color: #fff;
				text-align: center;				
				&:hover{
					background: #fff;
					color: $bg-color;
				}				
			}			
		}
	}
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
		
	}
	.find-back{
		font-size: .24rem;
		width: 90%;
		margin: .24rem auto;
		overflow: hidden;
		a{
			float: right;
		}
	}
	.protocal{
		margin-top: .36rem;
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
