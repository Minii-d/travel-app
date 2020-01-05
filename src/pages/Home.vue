<template>
  <div class="home">
	<Header/>
    <Banner :data="swiperList" />
    <Icons :iconData="iconList" />
	<Favorite/>
	<DCell v-for="item of 4"/>
	<div class="weekend-title">周末去哪儿</div>
	<DItem :cellList="cellList"/>
  </div>
</template>

<script>
	import Header from '@/layouts/Header.vue'
	import Banner from '@/components/Banner.vue'
	import Icons from '@/components/Icons.vue'
	import Favorite from '@/components/Favorite.vue'
	import DCell from '@/components/d-cell.vue'
	import DItem from '@/components/d-item.vue'
  export default {
    data(){
			return {
			swiperList:[],
			iconList:[],
			cellList:[]
		}
	},
    components:{
		Banner,Icons,Favorite,DCell,DItem,Header
	},
    mounted(){
		this.$axios({
			url:'/api/icons',
			params:{_page:1,_limit:9}
		}).then(
			res=>this.iconList=res.data.data
			// res=>console.log(res.data.data)
		),
		
		this.$axios({
			url:'/api/Banner',
			params:{_page:1,_limit:4}
		}).then(
			res=>this.swiperList=res.data.data
			// res=>console.log(res.data.data)
		)
		
		this.$axios({
			url:'/api/Column',
			params:{_page:1,_limit:3}
		}).then(
			res=>this.cellList=res.data.data
			// res=>console.log(res.data.data)
		)
	},
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
