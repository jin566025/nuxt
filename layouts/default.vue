<template>
  <el-container style="background-color: #F8F8F8;">
		<el-header height="197px">
			<my-header />
		</el-header>
		<el-main>
			<nuxt />
		</el-main>
		<el-footer height="100%">
			<my-footer/>
		</el-footer>
	</el-container>
</template>

<script>
	import MyHeader from '@/components/public/header/index.vue'
	import MyFooter from '@/components/public/footer/index.vue'
	export default{
		components:{
			MyHeader,
			MyFooter
		}
	}
</script>

