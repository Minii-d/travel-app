<template>
	<div class="reg">
		<DetailHeader title="注册"/>
		<div class="form">
			<!-- <InputCell label="手机号" placeholder="请输入手机号" class="inputCell" /> -->
			<InputCell label="用户名" placeholder="手机/用户名/邮箱" class="inputCell" v-model="username"/>
			<InputCell label="密码" placeholder="请输入密码" class="inputCell" v-model="password"/>
			<InputCell label="图形码" placeholder="请输入图形码" class="inputCell"/>
			<InputCell label="验证码" placeholder="请输入验证码" class="inputCell"/>
			<!-- <h1 class="inputCell" id="h1" @click="upload">上传头像</h1> -->
			<!-- <input type="file" id="file" style="display: block;" value=""> -->
		</div>
		<LoginBtn class="loginBtn" value="注册" @click.native="reg"/>
		<p class="protocal">注册即同意去哪儿&nbsp;<a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a>&nbsp;和&nbsp;<a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">隐私政策</a></p>
	</div>
</template>

<script>
	import DetailHeader from "@/components/DetailHeader.vue"
	import InputCell from "@/components/input-cell.vue"
	import LoginBtn from "@/components/login-btn.vue"
	
	export default {
		data(){return {
			username: '',
			password: '',
			mess: ''
		}},
		components:{
			DetailHeader,InputCell,LoginBtn
		},
		mounted(){},
		updated(){},
		methods:{
			upload(){
			   let file=document.getElementById('file');
			   file.click()
			},
			
			reg() {			  
			  let formData = new FormData();
			  formData.append('username',this.username)
			  formData.append('password',this.password)
			  console.log(formData)
			  let file=document.getElementById('file');
			  formData.append('icon',file.files[0]);
			  
			  this.$axios({
			    url: '/api/reg',
			    method: 'post',
			    data: formData
			  }).then(
			    res => {
					console.log(res)
			      if(res.data.err==0){
			        console.log(res.data);
			        this.$router.push('/login')
			      }else{
			        this.mess=res.data.msg
			      }
			    }
			  )
			  
			}
		}
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
