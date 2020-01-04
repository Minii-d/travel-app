<template>
  <div class="reg">
    <DetailHeader title="注册"/>
	<form>
		<InputCell label="手机号" placeholder="请输入手机号"/>
	</form>
	
  </div>
</template>

<script>
	import DetailHeader from "@/components/DetailHeader.vue"
	import InputCell from "@/components/input-cell.vue"
	
	export default {
		data(){return {}},
		components:{
			DetailHeader,InputCell
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
  .reg{
	  
  }
</style>
