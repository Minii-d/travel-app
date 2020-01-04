<template>
	<div class="detail">
		<DetailHeader title="上海东方明珠"/>
		<DetailBanner/>
		<div class="sub-navs">
			<SubNav/>	
			<div class="address">
				<i>!</i><span>上海浦东新区世纪大道1号</span><i>&gt;</i>
			</div>
		</div>
		<div class="prev">
			<PrevCell class="prev-cell"/>
			<PrevCell class="prev-cell"/>
		</div>
		<DetailScenic/>
		<DetailScenic/>
		
	</div>
</template>

<script>
  import DetailHeader from '../components/DetailHeader.vue'
  import DetailBanner from '../components/DetailBanner.vue'
  import SubNav from '../components/sub-nav.vue'
  import PrevCell from '../components/prev-cell.vue'
  import DetailScenic from '@/components/detail-scenic/detail-scenic.vue'
  

  export default {
    data() {
      return {

      }
    },
    components: {
      DetailHeader,DetailBanner,SubNav,PrevCell,DetailScenic
    },
    
  //   mounted() {
  //     this.$axios({
  //       url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
  //     }).then(
  //       res => this.detail = res.data.data
  //     )
  //   },
  //   updated() {},
  //   methods: {}
  }
  
</script>

<style scoped lang="scss">
	.sub-navs{
		position: relative;
		padding: .2rem .2rem 0 .2rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
		.address{
			font-size: .24rem;
			padding: .2rem 0;
			margin: .1rem .2rem;
			line-height: .36rem;
			color: #212121;
			border-top: .01rem solid #eee;
		}
	}
	.prev{
		background: #fff;
		margin-bottom: .12rem;
		.prev-cell{
			padding: .12rem;
			margin-left: .12rem;
			border-top: .01rem solid #eee;			
		}
	}
	

</style>
