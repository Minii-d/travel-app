<template>
  <div id="app">
	<Header/>
	<Home/>
	<Footer/>
  </div>
</template>

<script>
	import Header from './Header.vue';
	import Home from '@/pages/Home'
	import Footer from './Footer.vue';

export default {
  name: 'app',
  components: {
	Header,Footer,Home
  }
}
</script>

<style>
#app {

}
</style>
