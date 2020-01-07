<template>
  <div class="prev-cell">
    <div class="prev-cell__cont">
		<h5>{{objList.ticketName}}</h5>
		<p><img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png">{{objList.message}}</p>
		<ul >
			<li v-for="(val,idx) of objList.tips">{{val}}</li>
			<!-- <li>无需换票</li> -->
			<!-- <li>不可退</li> -->
		</ul>
	</div>
	<DdBtn class="dd-btn" :text="text" :per="per" :perPrice="objList.perprice"/>
  </div>
</template>

<script>
	import DdBtn from "./dd-btn.vue"
	export default {
		props:{
			text:{
				type:String,
				default:''
			},
			per:{
				type:String,
				default:""
			},
			objList:{
				type:Object,
				default:function(){
					return {}
				}
			}
		},
		data(){return {}},
		components:{
			DdBtn
		},
		mounted(){
			// console.log(this.objList)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss"> 
  .prev-cell{
	  position: relative;
	  .prev-cell__cont{
		  margin-right: 1.6rem;
		  h5{
			  font-size: .28rem;
			  line-height: .52rem;
			  max-height: 1.04rem;
			  overflow: hidden;
		  }
		  p{
			  height: .32rem;
			  color: #616161;
			  font-size: .2rem;
			  line-height: .32rem;
			  white-space: nowrap;
			  img{
				  width: .2rem;
				  max-height: .32rem;
				  margin-right: .04rem;
				  vertical-align: top;
			  }
		  }
		  ul{
			 display: flex;
			 li{
				 display: inline-block;
				 margin-top: .08rem;
				 padding: 0 .04rem;
				 height: .32rem;
				 color: #00afc7;
				 font-size: .2rem;
				 line-height: .32rem;
				 white-space: nowrap;
			 }
		  }
	  }
	  .dd-btn{
		  position: absolute;
		  top: 25%;
		  right: .1rem;
	  }
  }
</style>
