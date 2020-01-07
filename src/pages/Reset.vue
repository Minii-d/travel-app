<template>
  <div class="reset">
    <DetailHeader/>
	<van-loading color="#1989fa" />
	<van-loading type="spinner" color="#1989fa" />
  </div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	export default {
		data(){return {}},
		components:{
			DetailHeader
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
  .reset{}
</style>
