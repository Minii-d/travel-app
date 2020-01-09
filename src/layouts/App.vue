<template>
  <div id="app">
	<!-- <Header/> -->
	<div class="loading">
		<van-loading type="spinner" color="#1989fa" v-show="this.$root.bLoading"/>
	</div>
	<!-- <Loading /> -->
	<router-view></router-view>
	<Footer/>
  </div>
</template>

<script>
	import Header from './Header.vue';
	// import Home from '@/pages/Home.vue';
	// import Detail from '@/pages/Detail.vue';
	import Footer from './Footer.vue';
	import Loading from '../components/Loading.vue';

export default {
  name: 'app',
  components: {
	Header,Footer,Loading
  }
}
</script>

<style lang="scss" scoped>
	#app{
		position: relative;
		.loading{			
			position:absolute;
			text-align: center;
			z-index: 999999;
			top: 1rem;
		}
	}

</style>
