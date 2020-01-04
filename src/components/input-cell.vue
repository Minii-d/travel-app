<template>
	<div class="input-cell">
		<label>{{label}}</label>
		<input type="text" :value="value" :placeholder="placeholder" @input="$emit('input',$event.target.value)"/>
	</div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
	  value:{
	    type:String,
	    default:''
	  },
	  label:{
	    type:String,
	    default:'手机号'
	  },
	  placeholder:{
		type:String,
		default:'请输入...'  
	  }
	},
    components:{},
  }
</script>

<style scoped lang="scss">
  .input-cell{
	width: 100%;
	border-bottom: .01rem solid #ddd;
	line-height: .45rem;
	display: flex;
	label{
		display: block;
		width: .9rem;
		color: #19a9ba;
	}
	input{
		flex: 1;
		width: .01rem;
		height: .3rem;
		border: 0;
		line-height: 1.5;
	}
  }
</style>
