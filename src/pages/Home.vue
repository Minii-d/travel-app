<template>
  <div class="home">
    <Banner/>
    <Icons/>
	<Favorite/>
	<DCell v-for="item of 4"/>
	<div class="weekend-title">周末去哪儿</div>
	<DItem v-for="val of 4"/>
  </div>
</template>

<script>
	import Banner from '@/components/Banner.vue'
	import Icons from '@/components/Icons.vue'
	import Favorite from '@/components/Favorite.vue'
	import DCell from '@/components/d-cell.vue'
	import DItem from '@/components/d-item.vue'
  export default {
    data(){return {}},
    components:{
		Banner,Icons,Favorite,DCell,DItem
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .home{}
  .weekend-title{
	  line-height: .8rem;
	  background: #eee;
	  text-indent: .2rem;
  }
</style>
