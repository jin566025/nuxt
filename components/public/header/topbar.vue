<template>
	<el-row
		:gutter="0"
		class="m-header"

	>
		<el-col :span="5">
			<div class="grid-content bg-purple">
				<Geo />
			</div>
		</el-col>
		<el-col :span="5">
			<div class="grid-content bg-purple">
				<User />
			</div>
		</el-col>
		<el-col :span="14">
			<div class="grid-content bg-purple">
				<Navbar />
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import Geo from './geo.vue'
	import User from './user.vue'
	import Navbar from './nav.vue'
	
	export default{
		components:{
			Geo,
			User,
			Navbar
		}
	}
</script>

<style lang="scss">
	
	@import "@/assets/css/public/layout.scss";
	@import "@/assets/css/public/header/index.scss";
</style>
